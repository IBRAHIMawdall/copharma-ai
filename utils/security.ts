/**
 * Security utilities for input sanitization and validation
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param input - The input string to sanitize
 * @returns Sanitized string with HTML tags removed
 */
export function sanitizeHtml(input: string): string {
  if (typeof input !== 'string') return ''
  
  // Remove HTML tags - do NOT decode entities to prevent XSS
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim()
}

/**
 * Validate email format
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (basic validation)
 * @param phone - Phone number to validate
 * @returns Boolean indicating if phone is valid
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

/**
 * Sanitize user input for safe storage and display
 * @param input - Input to sanitize
 * @returns Sanitized input
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML brackets
    .substring(0, 1000) // Limit length
}

/**
 * Validate and sanitize form data
 * @param data - Form data object
 * @returns Sanitized form data
 */
export function sanitizeFormData(data: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}