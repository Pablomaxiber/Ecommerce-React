import './Notification.css'
import { createContext, useState } from 'react'


const Notification = ( {message, severity, otherClass = 'Message' } ) => {
  
    const notificationStyles = {
      position:'absolute',
      top: 80,
      right: severity === 'success' ? 5 : 0,
      width: 'auto',
      height: 'auto',
     // backgroundColor: severity === 'success' ? 'green' : 'red',
      padding:'10px 20px 10px 20px',
      color: 'white'
    }
    if (message === ''){
      return null

    }

    return(
      <div style={notificationStyles} className={`${severity === 'success' ? 'success' : 'error'}`}>
       {message}
      </div>
    )
  
  }

  const NotificationContext = createContext()

export const NotificationProvider = ({children}) =>{

    const [message, setMessage] = useState('')
    const [severity, setSeverity] =useState('success')
    setTimeout(() =>{
      setMessage('')
    },3000)

    const setNotification =(sev, msg) =>{
      setMessage(msg)
      setSeverity(sev)
    }

    return(
      <NotificationContext.Provider value = {{setNotification}} > 
        <Notification message={message} severity={severity}/>
          {children}
      </NotificationContext.Provider>

    )
  }

  export default  NotificationContext

