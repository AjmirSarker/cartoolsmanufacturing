import React from 'react';
import extra from '../Banner/extra.jpg'

const SpecialItem = () => {
    return (
       
            <div className='container row'>
<div className=' col-md-6'>
    <img className='img-fluid rounded-circle' src={extra} alt=''></img>

</div>
<div className='col-md-6 text-light'>
    <h2>The Turbo 3287</h2>
    <h4>Ladies and gentlemen, the finest engine of the last 20 years is our current turbocharged masterpiece. In various forms, this 3.9-litre twin-turbo unit equips all of XP V8-engined cars. We pay tribute to it by showing you the latest, maddest iteration of it: the 488 Pista.</h4>

</div>

            </div>
            
       
    );
};

export default SpecialItem;