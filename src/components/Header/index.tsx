import { Moon } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { Container } from './styles'

export function Header() {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const text = 'hello world'
  let intervalId: number | undefined

  useEffect(() => {
    intervalId = setInterval(() => {
      if (textIndex < text.length) {
        setTypedText(typedText + text[textIndex])
        setTextIndex(textIndex + 1)
      } else {
        clearInterval(intervalId)
        setTimeout(() => {
          setTypedText('')
          setTextIndex(0)
          intervalId = setInterval(() => {
            if (textIndex < text.length) {
              setTypedText(typedText + text[textIndex])
              setTextIndex(textIndex + 1)
            }
          }, 50)
        }, 3000)
      }
    }, 50)
    return () => clearInterval(intervalId)
  }, [textIndex, text, typedText])

  return (
    <Container>
      <div className="code">
        <b>{`> `}</b>
        <span>{typedText}</span>{' '}
      </div>

      <div className="menu-pages">
        <a>Skills</a>
        <a>About</a>
        <a>Work</a>
        <a>Contact</a>
      </div>

      <div className="resume">
        <Moon size={24} color="#f9f9f9" />
        <button>Resume</button>
      </div>
    </Container>
  )
}
