import React from 'react'

function Category() {

  
  return (
    <>
    <section className='category'>

      <form onSubmit={handleSubmit}>
      
                 <select>
                        <option>Select Game</option>
                        <option>Full Stack Learning</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>UI design</option>
                        <option>UX design</option>
                    </select>

                    <button type='submit'>Show Condedate</button>
      </form>

    </section>
    </>
  )
}

export default Category