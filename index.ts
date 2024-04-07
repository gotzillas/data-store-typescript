/**
 * ตั้งค่า localStorage
 */
 export const setStore = (name: string, content: any) => {
  if (!name) {
    return
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }

  try {
    window.localStorage.setItem(name, content)
  } catch (e) {
    console.error(e)
  }
}

/**
 * ดึงค่า localStorage
 */
export const getStore = (name: string) => {
  if (!name) {
    return
  }

  try {
    return window.localStorage.getItem(name)
  } catch (e) {
    console.error(e)
  }
}

/**
ลบค่า localStorage
 */
export const removeStore = (name: string) => {
  if (!name) {
    return
  }

  try {
    window.localStorage.removeItem(name)
  } catch (e) {
    console.error(e)
  }
}

/**
 * ตั้งค่า sessionStorage
 */
export const setSessionStore = (name: string, content: any) => {
  if (!name) {
    return
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }

  try {
    window.sessionStorage.setItem(name, content)
  } catch (e) {
    console.error(e)
  }
}

/**
 * ตั้งค่าชื่อ sessionStorage
 */
export const getSessionStore = (name: any) => {
  if (!name) {
    return
  }

  try {
    return window.sessionStorage.getItem(name)
  } catch (e) {
    console.error(e)
  }
}

/**
 * ลบชื่อ sessionStorage
 */
export const removeSessionStore = (name: any) => {
  if (!name) {
    return
  }

  try {
    window.sessionStorage.removeItem(name)
  } catch (e) {
    console.error(e)
  }
}


/**
 * ลบชื่อ sessionStorage
 */
export const removeSessionStoreAll = (type: any) => {
  if (!type) {
    return
  }

  try {
    window.sessionStorage.removeItem(type)
  } catch (e) {
    console.error(e)
  }
}
