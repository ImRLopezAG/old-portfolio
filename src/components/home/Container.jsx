import PropTypes from 'prop-types'

export const Container = ({ section }) => {
  return (
    <main className="container">
      <section className="p-4">
        <h1>Hello World</h1>
      </section>
    </main>
  )
}

Container.defaultProps = {}
Container.propTypes = {}
