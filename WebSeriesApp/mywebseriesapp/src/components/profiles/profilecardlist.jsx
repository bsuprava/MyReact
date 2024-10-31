/**
 * This file shows how to pass jsx as props to child component
 */
import ProfileCard from '../profiles/profilecard';
function ProfileCards()
{
    return(
        <div>
             <h1>Profiles</h1>
             <ProfileCard name="Suprava" age={30} 
                          greetings={<p>Greetings! Have a wonderfull day.</p>}>
                <p>Hobbies: Reading, Playing</p>
                <button>contact</button>
             </ProfileCard>
        </div>
    );
}
export default ProfileCards