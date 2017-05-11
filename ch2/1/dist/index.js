const { createElement } = React
const { render } = ReactDOM


const title = React.createElement(
    'h1',
    {id: 'title', className: 'header'},
    'Hello World'
)

render(
    title,
    document.getElementById('react-container')
)
