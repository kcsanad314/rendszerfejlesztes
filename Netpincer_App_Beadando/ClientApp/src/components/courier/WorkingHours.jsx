import React from 'react'

class WorkingHours extends React.Component {

   render(){
      return (
         <div className="working-hours">
            From:
            <select name="" id="">
               <option value="">8</option>
               <option value="">9</option>
               <option value="">10</option>
               <option value="">11</option>
               <option value="">13</option>
               <option value="">14</option>
               <option value="">15</option>
            </select>
            To:
            <select name="" id="">
               <option value="">16</option>
               <option value="">17</option>
               <option value="">18</option>
               <option value="">19</option>
               <option value="">20</option>
               <option value="">21</option>
               <option value="">22</option>
               <option value="">23</option>
               <option value="">24</option>
            </select>
            <button className="save-button" onClick={()=>{alert("Saved successfully!")}}>Save</button>
         </div>
      )
   }
}

export default WorkingHours
