import fs from 'fs';
import path from 'path';

export async function getLegalContent(slug, locale) {
    const contentPath = path.join(process.cwd(), 'content', 'legal', locale, `${slug}.md`);

    try {
        const content = fs.readFileSync(contentPath, 'utf8');
        return content;
    } catch (error) {
        console.error(`Error reading legal content: ${slug} (${locale})`, error);
        if (locale === 'tr') {
            const enPath = path.join(process.cwd(), 'content', 'legal', 'en', `${slug}.md`);
            try {
                return fs.readFileSync(enPath, 'utf8');
            } catch (enError) {
                return `# Content Not Found\n\nThe requested legal document could not be found.`;
            }
        }
        return `# Content Not Found\n\nThe requested legal document could not be found.`;
    }
}