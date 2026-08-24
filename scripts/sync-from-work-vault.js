// scripts/sync-from-work-vault.js
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// === CONFIGURACIÓN (MODIFICA ESTAS RUTAS) ===
const WORK_VAULT = '/Users/aroy1962/Documents/ObsidianVaults/AROY 1962'; // Ej. /Users/aroy1962/Documents/Obsidian/Vault-Creativo
const PUBLISH_VAULT = path.resolve(__dirname, '../src/content/blog'); // Carpeta donde Quiet Pages espera las publicaciones
const IMAGES_SRC = path.join(WORK_VAULT, 'assets/images'); // Carpeta donde guardas las imágenes en tu vault de trabajo
const IMAGES_DEST = path.resolve(__dirname, '../public/images'); // Carpeta donde Astro sirve las imágenes
// ============================================

// Función para copiar una nota si tiene 'publish: true'
function syncNote(noteFile) {
    const srcPath = path.join(WORK_VAULT, noteFile);
    // Ignorar la plantilla y otros archivos no deseados
    if (noteFile === 'Plantilla-Publicacion.md') return false;

    try {
        const content = fs.readFileSync(srcPath, 'utf-8');
        if (content.includes('publish: true')) {
            const destPath = path.join(PUBLISH_VAULT, noteFile);
            fs.copySync(srcPath, destPath);
            console.log(`✅ Nota publicada: ${noteFile}`);
            return true;
        }
    } catch (error) {
        console.error(`❌ Error al leer ${noteFile}:`, error.message);
    }
    return false;
}

// Función para sincronizar imágenes
function syncImages() {
    if (fs.existsSync(IMAGES_SRC)) {
        fs.copySync(IMAGES_SRC, IMAGES_DEST);
        console.log('📸 Imágenes sincronizadas.');
    } else {
        console.log('ℹ️ No se encontraron imágenes en el vault de trabajo.');
    }
}

// Función para hacer commit y push automáticos
function gitCommitAndPush(projectPath) {
    try {
        console.log('🔄 Subiendo cambios a GitHub...');
        execSync('git add .', { cwd: projectPath, stdio: 'inherit' });
        const commitMessage = `Publicación automática: ${new Date().toISOString().slice(0, 10)}`;
        execSync(`git commit -m "${commitMessage}"`, { cwd: projectPath, stdio: 'inherit' });
        execSync('git push origin main', { cwd: projectPath, stdio: 'inherit' });
        console.log('✅ Cambios subidos a GitHub.');
    } catch (error) {
        console.error('❌ Error al subir a GitHub:', error.message);
        console.log('⚠️ Puedes hacer commit y push manualmente.');
    }
}

// --- EJECUCIÓN PRINCIPAL ---
console.log('🚀 Iniciando sincronización...');

// 1. Sincronizar notas
const notes = fs.readdirSync(WORK_VAULT).filter(f => f.endsWith('.md'));
let count = 0;
notes.forEach(note => {
    if (syncNote(note)) count++;
});

// 2. Sincronizar imágenes
syncImages();

console.log(`📝 ${count} notas sincronizadas.`);

// 3. Preguntar si desea subir a GitHub
console.log('\n¿Deseas subir los cambios a GitHub? (s/n)');
process.stdin.on('data', (data) => {
    const input = data.toString().trim().toLowerCase();
    if (input === 's' || input === 'si' || input === 'y' || input === 'yes') {
        gitCommitAndPush(path.resolve(__dirname, '..'));
        process.exit();
    } else {
        console.log('ℹ️ Puedes subir los cambios manualmente más tarde.');
        process.exit();
    }
});