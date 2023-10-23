// Define a type "TitleProps" to specify the expected props for the "Title" component.
type TitleProps = {
  title: string // A required prop: the title to be displayed.
  className?: string // An optional prop: additional CSS class for styling.
}

// Create and export the "Title" component.
export default function Title(props: TitleProps) {
  // Destructure the "title" and "className" props from the "props" object.
  const { title, className } = props

  // Render an <h1> element with the specified title and optional class.
  return <h1 className={className}>{title}</h1>
}
// .tsx --> React kode 
// default, named export {nyttNavnPåBlaBla} vs default export 
// props: 1. lag en type, importer, var-metode {title}, 

type TitleProps = {
    title: string
    className?: string // ? betyr at noe er optional
}

export default function Title(props: TitleProps) { 
    const {title, className} = props
    return <h1 className={className}> {title} </h1>
}