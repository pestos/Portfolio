import "../BubulleContact/BubulleContact.scss";

function BubulleContact(props) {
    return (
        <div className="contactConteneur">
            <div className={props.classB}>
                <i class={props.classI}></i>
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default BubulleContact;
