/**
 * This file shows how to receive jsx as props fromparent component
 */

const ProfileCard = props => {
    return(
        <div>
             <p>Name:{props.name}</p>
             <p>Age:{props.age}</p>
             <p>{props.greetings}</p>
             <p>{props.children}</p>
        </div>
    );
};
export default ProfileCard;