/**
 * Security utilities to prevent React2Shell and XSS attacks
 */

// Sanitize HTML content to prevent XSS
export function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Validate URL to prevent malicious redirects
export function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}

// Sanitize user input for safe storage
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>\"']/g, '')
    .substring(0, 1000); // Limit length
}

// Validate image URL specifically
export function validateImageUrl(url: string): boolean {
  if (!isValidUrl(url)) return false;
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowercaseUrl = url.toLowerCase();
  
  return imageExtensions.some(ext => 
    lowercaseUrl.includes(ext) || 
    lowercaseUrl.includes('image') ||
    lowercaseUrl.includes('img')
  );
}