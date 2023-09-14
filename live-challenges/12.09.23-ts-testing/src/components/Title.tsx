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