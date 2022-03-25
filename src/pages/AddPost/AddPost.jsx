import { useState, useRef, useEffect, } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const AddPost = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    content: ''
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPost(formData)
  }


  return (
    <>
      <h1>AddPost</h1>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <textarea
          
          value={formData.name}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={!validForm}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddPost;