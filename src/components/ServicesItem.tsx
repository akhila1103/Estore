interface Props{
    Icon: React.ReactNode
    title: string
    content: string
}

const ServicesItem = (props: Props) => {
  return (
    <div className="col-lg-3 col-sm-6 col-12 text-center">
        {props.Icon}
        <p className="mt-2 mb-1" style={{fontSize: "1.2rem"}}>{props.title}</p>
        <p className="mt-0" style={{color: "grey", fontSize: "0.9rem"}}>{props.content}</p>
    </div>
  )
}

export default ServicesItem