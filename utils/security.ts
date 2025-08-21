/**
 * Security utilities for input sanitization and validation
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param input - The input string to sanitize
 * @returns Sanitized string with HTML tags removed
 */
export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== 'string') return ''
  
  try {
    // Remove HTML tags - do NOT decode entities to prevent XSS
    return input
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: URLs
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim()
  } catch (error) {
    console.warn('Error sanitizing HTML:', error)
    return ''
  }
}

/**
 * Validate email format
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  } catch (error) {
    console.warn('Error validating email:', error)
    return false
  }
}

/**
 * Validate phone number (basic validation)
 * @param phone - Phone number to validate
 * @returns Boolean indicating if phone is valid
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false
  
  try {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    return phoneRegex.test(phone.trim())
  } catch (error) {
    console.warn('Error validating phone:', error)
    return false
  }
}

/**
 * Sanitize user input for safe storage and display
 * @param input - Input to sanitize
 * @returns Sanitized input
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return ''
  
  try {
    return sanitizeHtml(input)
      .replace(/[<>"']/g, '') // Remove potential HTML brackets and quotes
      .substring(0, 1000) // Limit length
  } catch (error) {
    console.warn('Error sanitizing input:', error)
    return ''
  }
}

/**
 * Validate and sanitize form data
 * @param data - Form data object
 * @returns Sanitized form data
 */
export function sanitizeFormData(data: Record<string, any>): Record<string, any> {
  if (!data || typeof data !== 'object') {
    console.warn('Invalid form data provided')
    return {}
  }
  
  const sanitized: Record<string, any> = {}
  
  try {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string') {
        sanitized[key] = sanitizeInput(value)
      } else if (typeof value === 'number' || typeof value === 'boolean') {
        sanitized[key] = value
      } else if (value === null || value === undefined) {
        sanitized[key] = ''
      } else {
        // Reject unsafe data types (objects, arrays, functions)
        console.warn(`Unsafe data type detected for key: ${key}`)
        sanitized[key] = ''
      }
    }
    
    return sanitized
  } catch (error) {
    console.error('Error sanitizing form data:', error)
    return {}
  }
}