import './Begin.scss';

function Begin({names}){
return(
<>
<section className="begin">
    <div className="begin-backgroundEffect"/>
    <div className="container">
        <div className="begin-mainText">
            <h1>{names}</h1>
        </div>
    </div>
</section>

</>
);
}

export default Begin;