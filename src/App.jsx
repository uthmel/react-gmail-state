import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'

import './styles/App.css'

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);

  const toggleRead = (targetIdEmail) => {
    setEmails(emails.map(email => 
      email.id === targetIdEmail ? { ...email, read: !email.read } : email
    ));
  };

  const toggleStar = (targetIdEmail) => {
    setEmails(emails.map(email => 
      email.id === targetIdEmail ? { ...email, starred: !email.starred } : email
    ));
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li className="item">
            <span className="label">Starred</span>
            <span className="count">{emails.filter(email => email.starred).length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map((email) => (
            <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
              <div className="select">
                <input 
                  className="select-checkbox" 
                  type="checkbox" 
                  checked={email.read} 
                  onChange={() => toggleRead(email.id)} 
                />
              </div>
              <div className="star">
                <input 
                  className="star-checkbox" 
                  type="checkbox" 
                  checked={email.starred} 
                  onChange={() => toggleStar(email.id)} 
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
