import {First} from './first'

export  const Second = () => {
    return(
        <div>
            <First name='komal' lastname='gupta' onClick ={() => console.log("clicked")}>
                <p>hi komal</p>
                <p>second hi</p>
            </First>
        </div>

    )

}