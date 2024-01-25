import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Navbar'
import FormAdd from '../../../components/FormAdd'

const Add = () => {
  return (
    <div>
        <Helmet>
            <title>
                Add
            </title>
        </Helmet>

        <Navbar></Navbar>

        <main>
          <FormAdd></FormAdd>
        </main>
    </div>
  )
}

export default Add