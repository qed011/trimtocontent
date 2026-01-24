// ===================================
// Trim to Content - Main Application
// 100% Client-Side Image Trimming Tool
// ===================================

// ===================================
// I18N - Internationalization System
// ===================================
const translations = {
    en: {
        app_title: "Trim to Content",
        upgrade_to_pro: "Upgrade to Pro",
        restore_pro: "Restore Pro",
        privacy_notice: "All processing happens locally in your browser. No images are uploaded to any server.",
        drag_drop_title: "Drag & Drop Images Here",
        drag_drop_subtitle: "or click to browse",
        supported_formats: "Supports PNG, JPG, WebP",
        settings_title: "Settings",
        trim_mode: "Trim Mode:",
        mode_auto: "Auto-detect (PRO)",
        mode_transparency: "Transparency (PNG)",
        mode_white: "Near-White Background",
        threshold_label: "Threshold:",
        pro_only: "PRO",
        output_format: "Output Format:",
        format_original: "Keep Original",
        format_png: "PNG",
        format_webp: "WebP",
        trim_images: "Trim Images",
        images_title: "Your Images",
        download_all_zip: "Download All as ZIP",
        clear_all: "Clear All",
        how_it_works_title: "How It Works",
        step1_title: "Upload Your Images",
        step1_desc: "Drag and drop or click to select PNG, JPG, or WebP images from your device.",
        step2_title: "Automatic Detection",
        step2_desc: "Our algorithm detects and removes transparent or near-white empty borders around your content.",
        step3_title: "Download Results",
        step3_desc: "Get your perfectly trimmed images instantly. Pro users can download all as a ZIP file.",
        ad_label: "Advertisement",
        privacy_policy: "Privacy Policy",
        upgrade_modal_title: "Upgrade to Pro - Lifetime Access",
        feature_unlimited: "Unlimited images per batch",
        feature_auto: "Auto-detect background mode",
        feature_threshold: "Adjustable threshold slider",
        feature_zip: "Download all as ZIP",
        feature_no_ads: "No advertisements",
        feature_lifetime: "Lifetime access on this device",
        one_person_license: "Each license is intended for one person.",
        buy_now: "Buy Now - $1.00",
        restore_modal_title: "Restore Pro License",
        restore_instructions: "Enter your license key to restore Pro features on this device.",
        validate_license: "Validate License",
        free_limit_title: "Free Plan Limitation",
        free_limit_message: "Free users can only process 1 image at a time. Upgrade to Pro for unlimited batch processing!",
        upgrade_now: "Upgrade Now",
        download: "Download",
        remove: "Remove",
        processing: "Processing...",
        trimmed: "Trimmed",
        no_trim_needed: "No trim needed",
        error: "Error",
        license_valid: "✓ License activated on this device!",
        license_invalid: "✗ Invalid license key format.",
        threshold_help_title: "What is Threshold?",
        threshold_help_description: "The threshold determines how sensitive the trimming algorithm is when detecting borders. It controls the color difference needed for pixels to be considered part of your image content.",
        threshold_help_example: "Example:",
        threshold_help_example_text: "If your image has a white background with a logo containing text and shades:",
        threshold_help_low: "Low values (0-10):",
        threshold_help_low_effect: "Only removes pure white borders. May leave light gray edges.",
        threshold_help_medium: "Medium values (10-20):",
        threshold_help_medium_effect: "Removes white and light gray. Good for most images.",
        threshold_help_high: "High values (20-40):",
        threshold_help_high_effect: "More aggressive trimming. Removes even medium gray. May cut into your content.",
        threshold_help_tips: "Tips:",
        threshold_help_tip1: "Start with value 10-15 for most images",
        threshold_help_tip2: "Increase slowly and preview before processing",
        threshold_help_tip3: "For text with anti-aliasing (smooth edges), use 20-25",
        threshold_help_tip4: "Watch the preview to avoid cutting into your content"
    },
    "pt-BR": {
        app_title: "Cortar ao Conteúdo",
        upgrade_to_pro: "Upgrade para Pro",
        restore_pro: "Restaurar Pro",
        privacy_notice: "Todo processamento acontece localmente no seu navegador. Nenhuma imagem é enviada para servidor.",
        drag_drop_title: "Arraste e Solte Imagens Aqui",
        drag_drop_subtitle: "ou clique para selecionar",
        supported_formats: "Suporta PNG, JPG, WebP",
        settings_title: "Configurações",
        trim_mode: "Modo de Corte:",
        mode_auto: "Auto-detectar (PRO)",
        mode_transparency: "Transparência (PNG)",
        mode_white: "Fundo Quase Branco",
        threshold_label: "Limite:",
        pro_only: "PRO",
        output_format: "Formato de Saída:",
        format_original: "Manter Original",
        format_png: "PNG",
        format_webp: "WebP",
        trim_images: "Cortar Imagens",
        images_title: "Suas Imagens",
        download_all_zip: "Baixar Todas em ZIP",
        clear_all: "Limpar Tudo",
        how_it_works_title: "Como Funciona",
        step1_title: "Envie Suas Imagens",
        step1_desc: "Arraste e solte ou clique para selecionar imagens PNG, JPG ou WebP do seu dispositivo.",
        step2_title: "Detecção Automática",
        step2_desc: "Nosso algoritmo detecta e remove bordas vazias transparentes ou quase brancas ao redor do seu conteúdo.",
        step3_title: "Baixe os Resultados",
        step3_desc: "Obtenha suas imagens perfeitamente cortadas instantaneamente. Usuários Pro podem baixar todas em ZIP.",
        ad_label: "Publicidade",
        privacy_policy: "Política de Privacidade",
        upgrade_modal_title: "Upgrade para Pro - Acesso Vitalício",
        feature_unlimited: "Imagens ilimitadas por lote",
        feature_auto: "Modo auto-detectar fundo",
        feature_threshold: "Controle ajustável de limite",
        feature_zip: "Baixar todas em ZIP",
        feature_no_ads: "Sem anúncios",
        feature_lifetime: "Acesso vitalício neste dispositivo",
        one_person_license: "Cada licença é destinada a uma pessoa.",
        buy_now: "Comprar Agora - $1.00",
        restore_modal_title: "Restaurar Licença Pro",
        restore_instructions: "Digite sua chave de licença para restaurar recursos Pro neste dispositivo.",
        validate_license: "Validar Licença",
        free_limit_title: "Limitação do Plano Gratuito",
        free_limit_message: "Usuários gratuitos podem processar apenas 1 imagem por vez. Faça upgrade para Pro para processamento em lote ilimitado!",
        upgrade_now: "Fazer Upgrade Agora",
        download: "Baixar",
        remove: "Remover",
        processing: "Processando...",
        trimmed: "Cortado",
        no_trim_needed: "Sem necessidade de corte",
        error: "Erro",
        license_valid: "✓ Licença ativada neste dispositivo!",
        license_invalid: "✗ Formato de chave de licença inválido.",
        threshold_help_title: "O que é Limite?",
        threshold_help_description: "O limite determina a sensibilidade do algoritmo de corte ao detectar bordas. Controla a diferença de cor necessária para que os pixels sejam considerados como parte do seu conteúdo.",
        threshold_help_example: "Exemplo:",
        threshold_help_example_text: "Se sua imagem tem um fundo branco com um logo contendo texto e tons:",
        threshold_help_low: "Valores baixos (0-10):",
        threshold_help_low_effect: "Remove apenas bordas brancas puras. Pode deixar bordas cinza claro.",
        threshold_help_medium: "Valores médios (10-20):",
        threshold_help_medium_effect: "Remove branco e cinza claro. Bom para a maioria das imagens.",
        threshold_help_high: "Valores altos (20-40):",
        threshold_help_high_effect: "Corte mais agressivo. Remove até cinza médio. Pode cortar seu conteúdo.",
        threshold_help_tips: "Dicas:",
        threshold_help_tip1: "Comece com valor 10-15 para a maioria das imagens",
        threshold_help_tip2: "Aumente lentamente e visualize antes de processar",
        threshold_help_tip3: "Para texto com suavização (bordas suaves), use 20-25",
        threshold_help_tip4: "Observe a prévia para evitar cortar seu conteúdo"
    },
    es: {
        app_title: "Recortar al Contenido",
        upgrade_to_pro: "Actualizar a Pro",
        restore_pro: "Restaurar Pro",
        privacy_notice: "Todo el procesamiento ocurre localmente en tu navegador. No se suben imágenes a ningún servidor.",
        drag_drop_title: "Arrastra y Suelta Imágenes Aquí",
        drag_drop_subtitle: "o haz clic para seleccionar",
        supported_formats: "Soporta PNG, JPG, WebP",
        settings_title: "Configuración",
        trim_mode: "Modo de Recorte:",
        mode_auto: "Auto-detectar (PRO)",
        mode_transparency: "Transparencia (PNG)",
        mode_white: "Fondo Casi Blanco",
        threshold_label: "Umbral:",
        pro_only: "PRO",
        output_format: "Formato de Salida:",
        format_original: "Mantener Original",
        format_png: "PNG",
        format_webp: "WebP",
        trim_images: "Recortar Imágenes",
        images_title: "Tus Imágenes",
        download_all_zip: "Descargar Todas en ZIP",
        clear_all: "Limpiar Todo",
        how_it_works_title: "Cómo Funciona",
        step1_title: "Sube Tus Imágenes",
        step1_desc: "Arrastra y suelta o haz clic para seleccionar imágenes PNG, JPG o WebP desde tu dispositivo.",
        step2_title: "Detección Automática",
        step2_desc: "Nuestro algoritmo detecta y elimina bordes vacíos transparentes o casi blancos alrededor de tu contenido.",
        step3_title: "Descarga Resultados",
        step3_desc: "Obtén tus imágenes perfectamente recortadas al instante. Los usuarios Pro pueden descargar todas en ZIP.",
        ad_label: "Publicidad",
        privacy_policy: "Política de Privacidad",
        upgrade_modal_title: "Actualizar a Pro - Acceso de por Vida",
        feature_unlimited: "Imágenes ilimitadas por lote",
        feature_auto: "Modo auto-detectar fondo",
        feature_threshold: "Control ajustable de umbral",
        feature_zip: "Descargar todas en ZIP",
        feature_no_ads: "Sin anuncios",
        feature_lifetime: "Acceso de por vida en este dispositivo",
        one_person_license: "Cada licencia está destinada a una persona.",
        buy_now: "Comprar Ahora - $1.00",
        restore_modal_title: "Restaurar Licencia Pro",
        restore_instructions: "Ingresa tu clave de licencia para restaurar las funciones Pro en este dispositivo.",
        validate_license: "Validar Licencia",
        free_limit_title: "Limitación del Plan Gratuito",
        free_limit_message: "Los usuarios gratuitos solo pueden procesar 1 imagen a la vez. ¡Actualiza a Pro para procesamiento por lotes ilimitado!",
        upgrade_now: "Actualizar Ahora",
        download: "Descargar",
        remove: "Eliminar",
        processing: "Procesando...",
        trimmed: "Recortado",
        no_trim_needed: "No necesita recorte",
        error: "Error",
        license_valid: "✓ ¡Licencia activada en este dispositivo!",
        license_invalid: "✗ Formato de clave de licencia inválido.",
        threshold_help_title: "¿Qué es Umbral?",
        threshold_help_description: "El umbral determina la sensibilidad del algoritmo de recorte al detectar bordes. Controla la diferencia de color necesaria para que los píxeles se consideren parte del contenido de tu imagen.",
        threshold_help_example: "Ejemplo:",
        threshold_help_example_text: "Si tu imagen tiene un fondo blanco con un logo que contiene texto y tonos:",
        threshold_help_low: "Valores bajos (0-10):",
        threshold_help_low_effect: "Solo elimina bordes blancos puros. Puede dejar bordes gris claro.",
        threshold_help_medium: "Valores medios (10-20):",
        threshold_help_medium_effect: "Elimina blanco y gris claro. Bueno para la mayoría de imágenes.",
        threshold_help_high: "Valores altos (20-40):",
        threshold_help_high_effect: "Recorte más agresivo. Elimina incluso gris medio. Puede cortar tu contenido.",
        threshold_help_tips: "Consejos:",
        threshold_help_tip1: "Comienza con valor 10-15 para la mayoría de imágenes",
        threshold_help_tip2: "Aumenta lentamente y previsualiza antes de procesar",
        threshold_help_tip3: "Para texto con suavizado (bordes suaves), usa 20-25",
        threshold_help_tip4: "Observa la vista previa para evitar cortar tu contenido",
        license_invalid: "✗ Formato de clave de licencia inválido."
    }
};

// ===================================
// App State Management
// ===================================
class AppState {
    constructor() {
        this.images = [];
        this.isPro = localStorage.getItem('pro') === 'true';
        this.currentLanguage = this.detectLanguage();
        this.theme = this.detectTheme();
    }

    detectLanguage() {
        const saved = localStorage.getItem('language');
        if (saved && translations[saved]) return saved;
        
        const browserLang = navigator.language || navigator.userLanguage;
        if (translations[browserLang]) return browserLang;
        
        const langPrefix = browserLang.split('-')[0];
        if (langPrefix === 'pt') return 'pt-BR';
        if (langPrefix === 'es') return 'es';
        
        return 'en';
    }

    detectTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
    }

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }

    setPro(value) {
        this.isPro = value;
        localStorage.setItem('pro', value ? 'true' : 'false');
    }

    addImage(imageData) {
        this.images.push(imageData);
    }

    removeImage(id) {
        this.images = this.images.filter(img => img.id !== id);
    }

    clearImages() {
        this.images = [];
    }

    getImage(id) {
        return this.images.find(img => img.id === id);
    }
}

// ===================================
// I18N Manager
// ===================================
class I18nManager {
    constructor(appState) {
        this.appState = appState;
    }

    translate(key) {
        return translations[this.appState.currentLanguage][key] || key;
    }

    updateUI() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.translate(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });

        // Update select options
        document.querySelectorAll('option[data-i18n]').forEach(option => {
            const key = option.getAttribute('data-i18n');
            option.textContent = this.translate(key);
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.appState.currentLanguage;
    }
}

// ===================================
// License Key Validator
// ===================================
class LicenseValidator {
    // License format: TRIM-XXXX-XXXX-XXXX-C
    // X = base32 character (A-Z, 2-7)
    // C = checksum character
    
    static BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

    static validate(key) {
        // Remove spaces and convert to uppercase
        key = key.replace(/\s/g, '').toUpperCase();
        
        // Check format: TRIM-XXXX-XXXX-XXXX-C
        const pattern = /^TRIM-([A-Z2-7]{4})-([A-Z2-7]{4})-([A-Z2-7]{4})-([A-Z2-7])$/;
        const match = key.match(pattern);
        
        if (!match) return false;
        
        // Extract parts
        const part1 = match[1];
        const part2 = match[2];
        const part3 = match[3];
        const checksum = match[4];
        
        // Calculate expected checksum
        const data = part1 + part2 + part3;
        const expectedChecksum = this.calculateChecksum(data);
        
        return checksum === expectedChecksum;
    }

    static calculateChecksum(data) {
        // Simple checksum: sum of character positions mod 32
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            const char = data[i];
            const pos = this.BASE32.indexOf(char);
            if (pos === -1) return null;
            sum += pos * (i + 1); // Weight by position
        }
        return this.BASE32[sum % 32];
    }

    // Generate a sample valid key for testing
    static generateSampleKey() {
        let parts = [];
        for (let i = 0; i < 3; i++) {
            let part = '';
            for (let j = 0; j < 4; j++) {
                part += this.BASE32[Math.floor(Math.random() * 32)];
            }
            parts.push(part);
        }
        const data = parts.join('');
        const checksum = this.calculateChecksum(data);
        return `TRIM-${parts[0]}-${parts[1]}-${parts[2]}-${checksum}`;
    }
}

// ===================================
// License Testing Helper (Dev Only)
// ===================================
// Para testar offline o sistema de licença, abra o console (F12) e digite:
// generateTestLicense() - gera uma chave de teste válida
// validateTestLicense() - valida a última chave gerada
const generateTestLicense = () => {
    const key = LicenseValidator.generateSampleKey();
    window.testLicenseKey = key;
    console.log('✓ Chave de teste gerada:', key);
    console.log('Cole esta chave no modal de "Restore Pro License"');
    return key;
};

const validateTestLicense = () => {
    if (!window.testLicenseKey) {
        console.log('❌ Nenhuma chave gerada. Execute generateTestLicense() primeiro');
        return false;
    }
    const isValid = LicenseValidator.validate(window.testLicenseKey);
    console.log(isValid ? '✓ Chave válida!' : '❌ Chave inválida');
    return isValid;
};

// ===================================
// Image Trimmer - Core Algorithm
// ===================================
class ImageTrimmer {
    /**
     * Trim image by transparency or near-white background
     * @param {HTMLImageElement} img - Source image
     * @param {Object} options - { mode: 'transparency'|'white', threshold: 0-40 }
     * @returns {Promise<{canvas, wasModified, originalSize, newSize}>}
     */
    static async trim(img, options = {}) {
        const mode = options.mode || 'transparency';
        const threshold = options.threshold || 10;

        // Create canvas from image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        // Auto-detect mode: analyze image to determine best trimming method
        let actualMode = mode;
        let detectedColor = null;
        let effectiveThreshold = threshold;
        
        if (mode === 'auto') {
            const detection = this.detectBackgroundMode(pixels, canvas.width, canvas.height);
            actualMode = detection.mode;
            detectedColor = detection.backgroundColor;
            
            // Adjust threshold based on detected mode
            // For non-white solid colors, we need a higher threshold
            if (actualMode === 'color' && detectedColor) {
                // Use a minimum threshold of 15 for solid color backgrounds
                effectiveThreshold = Math.max(threshold, 15);
            }
        }

        // Find bounding box of content
        const bounds = this.findContentBounds(pixels, canvas.width, canvas.height, actualMode, effectiveThreshold, detectedColor);

        if (!bounds) {
            // No content found or image is all content
            return {
                canvas,
                wasModified: false,
                originalSize: { width: canvas.width, height: canvas.height },
                newSize: { width: canvas.width, height: canvas.height }
            };
        }

        // Check if trimming is needed
        if (bounds.left === 0 && bounds.top === 0 && 
            bounds.right === canvas.width - 1 && bounds.bottom === canvas.height - 1) {
            return {
                canvas,
                wasModified: false,
                originalSize: { width: canvas.width, height: canvas.height },
                newSize: { width: canvas.width, height: canvas.height }
            };
        }

        // Create trimmed canvas
        const trimmedWidth = bounds.right - bounds.left + 1;
        const trimmedHeight = bounds.bottom - bounds.top + 1;
        const trimmedCanvas = document.createElement('canvas');
        const trimmedCtx = trimmedCanvas.getContext('2d');

        trimmedCanvas.width = trimmedWidth;
        trimmedCanvas.height = trimmedHeight;
        trimmedCtx.drawImage(
            canvas,
            bounds.left, bounds.top, trimmedWidth, trimmedHeight,
            0, 0, trimmedWidth, trimmedHeight
        );

        return {
            canvas: trimmedCanvas,
            wasModified: true,
            originalSize: { width: canvas.width, height: canvas.height },
            newSize: { width: trimmedWidth, height: trimmedHeight }
        };
    }

    /**
     * Auto-detect background mode by analyzing image edges and corners
     * Returns the best mode and detected background color
     * 
     * Strategy:
     * 1. Sample corners first (most reliable for background detection)
     * 2. Sample edges if corners are consistent
     * 3. Determine if background is transparent, white, or solid color
     */
    static detectBackgroundMode(pixels, width, height) {
        // === Step 1: Analyze corners (most reliable for background) ===
        const cornerSize = Math.min(10, Math.floor(Math.min(width, height) / 10));
        const corners = [
            { x: 0, y: 0 },                           // Top-left
            { x: width - cornerSize, y: 0 },          // Top-right
            { x: 0, y: height - cornerSize },         // Bottom-left
            { x: width - cornerSize, y: height - cornerSize }  // Bottom-right
        ];
        
        let transparentCount = 0;
        let opaquePixels = [];
        
        // Sample pixels from each corner
        for (const corner of corners) {
            for (let dy = 0; dy < cornerSize; dy++) {
                for (let dx = 0; dx < cornerSize; dx++) {
                    const x = Math.min(corner.x + dx, width - 1);
                    const y = Math.min(corner.y + dy, height - 1);
                    const idx = (y * width + x) * 4;
                    
                    const pixel = {
                        r: pixels[idx],
                        g: pixels[idx + 1],
                        b: pixels[idx + 2],
                        a: pixels[idx + 3]
                    };
                    
                    // Count truly transparent pixels (alpha < 128)
                    if (pixel.a < 128) {
                        transparentCount++;
                    } else {
                        opaquePixels.push(pixel);
                    }
                }
            }
        }
        
        const totalCornerPixels = cornerSize * cornerSize * 4;
        const transparencyRatio = transparentCount / totalCornerPixels;
        
        // === Step 2: Determine mode based on transparency ratio ===
        
        // If more than 30% of corner pixels are transparent, use transparency mode
        if (transparencyRatio > 0.3) {
            console.log('Auto-detect: Transparency mode (ratio:', transparencyRatio.toFixed(2) + ')');
            return { mode: 'transparency', backgroundColor: null };
        }
        
        // === Step 3: Analyze opaque pixels to find background color ===
        if (opaquePixels.length === 0) {
            console.log('Auto-detect: Transparency mode (no opaque pixels)');
            return { mode: 'transparency', backgroundColor: null };
        }
        
        // Calculate average color of opaque corner pixels
        let totalR = 0, totalG = 0, totalB = 0;
        for (const pixel of opaquePixels) {
            totalR += pixel.r;
            totalG += pixel.g;
            totalB += pixel.b;
        }
        
        const avgColor = {
            r: Math.round(totalR / opaquePixels.length),
            g: Math.round(totalG / opaquePixels.length),
            b: Math.round(totalB / opaquePixels.length)
        };
        
        // Calculate color variance to check consistency
        let variance = 0;
        for (const pixel of opaquePixels) {
            variance += Math.abs(pixel.r - avgColor.r);
            variance += Math.abs(pixel.g - avgColor.g);
            variance += Math.abs(pixel.b - avgColor.b);
        }
        variance /= (opaquePixels.length * 3);
        
        // If variance is too high, corners have different colors (might be content, not background)
        if (variance > 30) {
            console.log('Auto-detect: High variance in corners, using transparency mode');
            return { mode: 'transparency', backgroundColor: null };
        }
        
        // === Step 4: Classify the background color ===
        
        // Check if near white (R, G, B all > 230)
        const isNearWhite = avgColor.r > 230 && avgColor.g > 230 && avgColor.b > 230;
        
        // Check if near black (R, G, B all < 25)
        const isNearBlack = avgColor.r < 25 && avgColor.g < 25 && avgColor.b < 25;
        
        // Check if grayscale (R ≈ G ≈ B)
        const isGrayscale = Math.abs(avgColor.r - avgColor.g) < 10 && 
                           Math.abs(avgColor.g - avgColor.b) < 10 &&
                           Math.abs(avgColor.r - avgColor.b) < 10;
        
        if (isNearWhite) {
            console.log('Auto-detect: Near-white mode (avg:', avgColor.r, avgColor.g, avgColor.b + ')');
            return { mode: 'white', backgroundColor: avgColor };
        }
        
        if (isNearBlack) {
            console.log('Auto-detect: Solid color mode - black (avg:', avgColor.r, avgColor.g, avgColor.b + ')');
            return { mode: 'color', backgroundColor: avgColor };
        }
        
        if (isGrayscale) {
            console.log('Auto-detect: Solid color mode - gray (avg:', avgColor.r, avgColor.g, avgColor.b + ')');
            return { mode: 'color', backgroundColor: avgColor };
        }
        
        // Default: use detected color as background
        console.log('Auto-detect: Solid color mode (avg:', avgColor.r, avgColor.g, avgColor.b + ')');
        return { mode: 'color', backgroundColor: avgColor };
    }

    /**
     * Find bounding box of content pixels
     */
    static findContentBounds(pixels, width, height, mode, threshold, backgroundColor = null) {
        let left = width;
        let right = 0;
        let top = height;
        let bottom = 0;
        let hasContent = false;

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const idx = (y * width + x) * 4;
                const r = pixels[idx];
                const g = pixels[idx + 1];
                const b = pixels[idx + 2];
                const a = pixels[idx + 3];

                let isContent = false;

                if (mode === 'transparency') {
                    // Check alpha channel - anything not fully transparent is content
                    isContent = a > 10; // Small threshold for alpha
                } else if (mode === 'white') {
                    // Near-white detection
                    // Check if pixel is NOT near white
                    const whiteDiff = Math.max(
                        Math.abs(255 - r),
                        Math.abs(255 - g),
                        Math.abs(255 - b)
                    );
                    isContent = whiteDiff > threshold && a > 10;
                } else if (mode === 'color' && backgroundColor) {
                    // Custom color detection (used by auto-detect)
                    const colorDiff = Math.max(
                        Math.abs(backgroundColor.r - r),
                        Math.abs(backgroundColor.g - g),
                        Math.abs(backgroundColor.b - b)
                    );
                    isContent = colorDiff > threshold && a > 10;
                }

                if (isContent) {
                    hasContent = true;
                    left = Math.min(left, x);
                    right = Math.max(right, x);
                    top = Math.min(top, y);
                    bottom = Math.max(bottom, y);
                }
            }
        }

        if (!hasContent) return null;

        return { left, right, top, bottom };
    }

    /**
     * Convert canvas to blob with specified format
     */
    static async canvasToBlob(canvas, format, quality = 0.95) {
        return new Promise((resolve, reject) => {
            try {
                canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        // Fallback to PNG if the format is not supported
                        console.warn(`Format ${format} not supported, falling back to PNG`);
                        canvas.toBlob((fallbackBlob) => {
                            if (fallbackBlob) {
                                resolve(fallbackBlob);
                            } else {
                                reject(new Error('Failed to create blob from canvas'));
                            }
                        }, 'image/png');
                    }
                }, format, quality);
            } catch (error) {
                reject(error);
            }
        });
    }
}

// ===================================
// UI Manager
// ===================================
class UIManager {
    constructor(appState, i18n) {
        this.appState = appState;
        this.i18n = i18n;
        this.initElements();
        this.attachEventListeners();
        this.updateProUI();
        this.loadAds();
    }

    initElements() {
        this.dropZone = document.getElementById('dropZone');
        this.fileInput = document.getElementById('fileInput');
        this.settingsSection = document.getElementById('settingsSection');
        this.imagesSection = document.getElementById('imagesSection');
        this.imagesList = document.getElementById('imagesList');
        this.trimBtn = document.getElementById('trimBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
        this.downloadAllBtn = document.getElementById('downloadAllBtn');
        this.upgradeBtn = document.getElementById('upgradeBtn');
        this.restoreProBtn = document.getElementById('restoreProBtn');
        this.themeToggle = document.getElementById('themeToggle');
        this.languageSelector = document.getElementById('languageSelector');
        this.trimMode = document.getElementById('trimMode');
        this.threshold = document.getElementById('threshold');
        this.thresholdValue = document.getElementById('thresholdValue');
        this.outputFormat = document.getElementById('outputFormat');
        this.progressBar = document.getElementById('progressBar');
    }

    attachEventListeners() {
        // File upload
        this.dropZone.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFiles(e.target.files));
        
        // Drag & drop
        this.dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.dropZone.classList.add('drag-over');
        });
        
        this.dropZone.addEventListener('dragleave', () => {
            this.dropZone.classList.remove('drag-over');
        });
        
        this.dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            this.dropZone.classList.remove('drag-over');
            this.handleFiles(e.dataTransfer.files);
        });

        // Buttons
        this.trimBtn.addEventListener('click', () => this.processBatch());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
        this.downloadAllBtn.addEventListener('click', () => this.downloadAllAsZip());
        this.upgradeBtn.addEventListener('click', () => this.showModal('upgradeModal'));
        this.restoreProBtn.addEventListener('click', () => this.showModal('restoreModal'));
        
        // Theme toggle - use debounce to prevent double-firing on mobile
        let themeToggleDebounce = false;
        const handleThemeToggle = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (themeToggleDebounce) return;
            themeToggleDebounce = true;
            this.toggleTheme();
            setTimeout(() => { themeToggleDebounce = false; }, 300);
        };
        this.themeToggle.addEventListener('click', handleThemeToggle);
        this.themeToggle.addEventListener('touchend', handleThemeToggle);
        
        // Language selector
        this.languageSelector.value = this.appState.currentLanguage;
        this.languageSelector.addEventListener('change', (e) => {
            this.appState.setLanguage(e.target.value);
            this.i18n.updateUI();
        });

        // Threshold slider
        this.threshold.addEventListener('input', (e) => {
            this.thresholdValue.textContent = e.target.value;
        });

        // Threshold help button
        const thresholdHelpBtn = document.getElementById('thresholdHelpBtn');
        if (thresholdHelpBtn) {
            thresholdHelpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showModal('thresholdHelperModal');
            });
        }

        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').classList.add('hidden');
            });
        });

        // License validation
        document.getElementById('validateLicenseBtn').addEventListener('click', () => {
            this.validateLicense();
        });

        // Click outside modal to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        });
    }

    updateProUI() {
        const isPro = this.appState.isPro;
        
        // Show/hide upgrade button
        this.upgradeBtn.style.display = isPro ? 'none' : 'inline-block';
        
        // Enable/disable threshold slider
        this.threshold.disabled = !isPro;
        if (!isPro) {
            this.threshold.value = 10;
            this.thresholdValue.textContent = '10';
        }
        
        // Enable/disable auto-detect mode (Pro only)
        const autoOption = this.trimMode.querySelector('option[value="auto"]');
        if (autoOption) {
            autoOption.disabled = !isPro;
            // Reset to transparency if free user tries to use auto-detect
            if (!isPro && this.trimMode.value === 'auto') {
                this.trimMode.value = 'transparency';
            }
        }
        
        // Show/hide download all button
        if (isPro && this.appState.images.some(img => img.trimmed)) {
            this.downloadAllBtn.classList.remove('hidden');
        } else {
            this.downloadAllBtn.classList.add('hidden');
        }

        // Update ads visibility
        this.loadAds();
    }

    loadAds() {
        // ===================================
        // Google AdSense Auto Ads Implementation
        // ===================================
        // We use Auto Ads only (no manual ad units, no placeholders).
        // The AdSense loader script in <head> handles all ad placement automatically.
        // For Pro users, we neutralize the script to prevent ads from loading.
        
        const adsenseLoader = document.getElementById('adsenseLoader');
        
        if (!this.appState.isPro) {
            // Free user: Allow Auto Ads to run
            // The AdSense script in <head> will handle ad placement automatically
            // Google decides where to place ads based on page content
            if (adsenseLoader) {
                adsenseLoader.setAttribute('data-ads', 'enabled');
            }
        } else {
            // Pro user: Neutralize AdSense to prevent ads
            // Remove the AdSense loader script to prevent Auto Ads
            // This stops any new ad requests from being made
            if (adsenseLoader) {
                adsenseLoader.remove();
                console.log('AdSense Auto Ads disabled for Pro user');
            }
            
            // Clear any AdSense-related global state to prevent residual ads
            // This is a safety measure for Auto Ads
            if (window.adsbygoogle) {
                window.adsbygoogle.loaded = true; // Prevent further ad loading
            }
        }
    }

    toggleTheme() {
        const newTheme = this.appState.theme === 'light' ? 'dark' : 'light';
        this.appState.setTheme(newTheme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = this.themeToggle.querySelector('.theme-icon');
        icon.textContent = this.appState.theme === 'light' ? '🌙' : '☀️';
    }

    showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }

    validateLicense() {
        const input = document.getElementById('licenseKeyInput');
        const message = document.getElementById('licenseMessage');
        const key = input.value.trim();

        if (LicenseValidator.validate(key)) {
            this.appState.setPro(true);
            message.className = 'license-message success';
            message.textContent = this.i18n.translate('license_valid');
            
            setTimeout(() => {
                document.getElementById('restoreModal').classList.add('hidden');
                this.updateProUI();
                input.value = '';
                message.textContent = '';
            }, 2000);
        } else {
            message.className = 'license-message error';
            message.textContent = this.i18n.translate('license_invalid');
        }
    }

    async handleFiles(files) {
        const fileArray = Array.from(files);
        
        // Validate file types
        const validFiles = fileArray.filter(file => {
            return file.type === 'image/png' || 
                   file.type === 'image/jpeg' || 
                   file.type === 'image/webp';
        });

        if (validFiles.length === 0) {
            alert('Please select valid image files (PNG, JPG, WebP)');
            return;
        }

        // Check free tier limit
        if (!this.appState.isPro && validFiles.length > 1) {
            this.showModal('freeLimitModal');
            return;
        }

        // Check file size limit (15MB per file)
        const maxSize = 15 * 1024 * 1024;
        const oversizedFiles = validFiles.filter(f => f.size > maxSize);
        if (oversizedFiles.length > 0) {
            alert(`Some files are too large. Maximum size: 15MB`);
            return;
        }

        // Load images
        for (const file of validFiles) {
            await this.loadImage(file);
        }

        this.updateUI();
    }

    async loadImage(file) {
        const img = new Image();
        const url = URL.createObjectURL(file);
        
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
        });

        const imageData = {
            id: Date.now() + Math.random(),
            file: file,
            name: file.name,
            originalImage: img,
            originalUrl: url,
            originalSize: { width: img.width, height: img.height },
            trimmed: false,
            trimmedCanvas: null,
            trimmedUrl: null,
            newSize: null
        };

        this.appState.addImage(imageData);
    }

    updateUI() {
        const hasImages = this.appState.images.length > 0;
        
        this.settingsSection.classList.toggle('hidden', !hasImages);
        this.imagesSection.classList.toggle('hidden', !hasImages);
        
        if (hasImages) {
            this.renderImages();
        }
    }

    renderImages() {
        this.imagesList.innerHTML = '';
        
        this.appState.images.forEach(imageData => {
            const card = this.createImageCard(imageData);
            this.imagesList.appendChild(card);
        });

        this.updateProUI();
    }

    createImageCard(imageData) {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.id = `image-${imageData.id}`;

        const thumbnail = document.createElement('img');
        thumbnail.className = 'image-thumbnail';
        thumbnail.src = imageData.trimmedUrl || imageData.originalUrl;

        const info = document.createElement('div');
        info.className = 'image-info';
        
        const name = document.createElement('div');
        name.className = 'image-name';
        name.textContent = imageData.name;

        const details = document.createElement('div');
        details.className = 'image-details';
        
        let detailsHTML = `<span>Original: ${imageData.originalSize.width}×${imageData.originalSize.height}</span>`;
        
        if (imageData.trimmed && imageData.newSize) {
            const reduction = Math.round(
                (1 - (imageData.newSize.width * imageData.newSize.height) / 
                (imageData.originalSize.width * imageData.originalSize.height)) * 100
            );
            detailsHTML += `<span>Trimmed: ${imageData.newSize.width}×${imageData.newSize.height}</span>`;
            if (reduction > 0) {
                detailsHTML += `<span class="size-reduction">-${reduction}%</span>`;
            }
        }
        
        details.innerHTML = detailsHTML;
        
        info.appendChild(name);
        info.appendChild(details);

        const actions = document.createElement('div');
        actions.className = 'image-actions';

        if (imageData.processing) {
            const status = document.createElement('div');
            status.className = 'image-status';
            status.innerHTML = `<div class="spinner"></div> <span>${this.i18n.translate('processing')}</span>`;
            actions.appendChild(status);
        } else if (imageData.trimmed) {
            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'btn-primary';
            downloadBtn.textContent = this.i18n.translate('download');
            downloadBtn.onclick = () => this.downloadImage(imageData.id);
            actions.appendChild(downloadBtn);
        }

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-text';
        removeBtn.textContent = this.i18n.translate('remove');
        removeBtn.onclick = () => this.removeImage(imageData.id);
        actions.appendChild(removeBtn);

        card.appendChild(thumbnail);
        card.appendChild(info);
        card.appendChild(actions);

        return card;
    }

    async processBatch() {
        const mode = this.trimMode.value;
        const threshold = parseInt(this.threshold.value);
        const outputFormat = this.outputFormat.value;

        // Check if user is trying to use Pro features without Pro
        if (mode === 'auto' && !this.appState.isPro) {
            this.showModal('upgradeModal');
            return;
        }

        // Mark all as processing
        this.appState.images.forEach(img => {
            img.processing = true;
            img.trimmed = false;
        });
        this.renderImages();
        this.trimBtn.disabled = true;

        // Show progress bar
        this.progressBar.classList.remove('hidden');
        const progressFill = this.progressBar.querySelector('.progress-fill');
        const progressText = this.progressBar.querySelector('.progress-text');

        for (let i = 0; i < this.appState.images.length; i++) {
            const imageData = this.appState.images[i];
            
            try {
                // Trim image
                const result = await ImageTrimmer.trim(imageData.originalImage, { mode, threshold });
                
                // Determine output format
                let mimeType;
                let extension;
                
                if (outputFormat === 'original') {
                    mimeType = imageData.file.type;
                    extension = imageData.name.split('.').pop();
                } else if (outputFormat === 'png') {
                    mimeType = 'image/png';
                    extension = 'png';
                } else {
                    mimeType = 'image/webp';
                    extension = 'webp';
                }

                // Convert to blob
                const blob = await ImageTrimmer.canvasToBlob(result.canvas, mimeType);
                const url = URL.createObjectURL(blob);

                imageData.trimmedCanvas = result.canvas;
                imageData.trimmedUrl = url;
                imageData.trimmedBlob = blob;
                imageData.newSize = result.newSize;
                imageData.trimmed = true;
                imageData.processing = false;
                imageData.outputExtension = extension;

            } catch (error) {
                console.error('Error processing image:', error);
                imageData.processing = false;
                imageData.error = true;
            }

            // Update progress
            const progress = Math.round(((i + 1) / this.appState.images.length) * 100);
            progressFill.style.width = progress + '%';
            progressText.textContent = progress + '%';
            
            this.renderImages();
        }

        // Hide progress bar
        setTimeout(() => {
            this.progressBar.classList.add('hidden');
            progressFill.style.width = '0%';
        }, 500);

        this.trimBtn.disabled = false;
        this.updateProUI();
    }

    downloadImage(id) {
        const imageData = this.appState.getImage(id);
        if (!imageData || !imageData.trimmedBlob) return;

        const link = document.createElement('a');
        link.href = imageData.trimmedUrl;
        
        // Change extension if needed
        const baseName = imageData.name.replace(/\.[^/.]+$/, '');
        link.download = `${baseName}_trimmed.${imageData.outputExtension}`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    async downloadAllAsZip() {
        if (!this.appState.isPro) {
            this.showModal('upgradeModal');
            return;
        }

        if (typeof JSZip === 'undefined') {
            alert('JSZip library not loaded');
            return;
        }

        const zip = new JSZip();
        const trimmedImages = this.appState.images.filter(img => img.trimmed && img.trimmedBlob);

        if (trimmedImages.length === 0) {
            alert('No trimmed images to download');
            return;
        }

        trimmedImages.forEach(imageData => {
            const baseName = imageData.name.replace(/\.[^/.]+$/, '');
            const fileName = `${baseName}_trimmed.${imageData.outputExtension}`;
            zip.file(fileName, imageData.trimmedBlob);
        });

        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'trimmed_images.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    removeImage(id) {
        const imageData = this.appState.getImage(id);
        if (imageData) {
            URL.revokeObjectURL(imageData.originalUrl);
            if (imageData.trimmedUrl) {
                URL.revokeObjectURL(imageData.trimmedUrl);
            }
        }
        
        this.appState.removeImage(id);
        
        if (this.appState.images.length === 0) {
            this.clearAll();
        } else {
            this.renderImages();
        }
    }

    clearAll() {
        // Clean up URLs
        this.appState.images.forEach(imageData => {
            URL.revokeObjectURL(imageData.originalUrl);
            if (imageData.trimmedUrl) {
                URL.revokeObjectURL(imageData.trimmedUrl);
            }
        });
        
        this.appState.clearImages();
        this.fileInput.value = '';
        this.updateUI();
    }
}

// ===================================
// App Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize app state
    const appState = new AppState();
    
    // Initialize i18n
    const i18n = new I18nManager(appState);
    
    // Set initial theme
    appState.setTheme(appState.theme);
    
    // Initialize UI
    const ui = new UIManager(appState, i18n);
    
    // Update theme icon
    ui.updateThemeIcon();
    
    // Translate UI
    i18n.updateUI();
    
    // Log sample license key for testing (remove in production)
    console.log('Sample valid license key:', LicenseValidator.generateSampleKey());
});
