import React from 'react';
import "./text.css";
function HELLO(){
  return (
    <div>
      <h1>Hello World!!</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" name="name" /></td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td><input type="email" name="email" /></td>
            </tr>
            <tr>
              <td>Website:</td>
              <td><input type="url" name="website" /></td>
            </tr>
            <tr>
              <td>Classes:</td>
              <td><textarea name="comment" rows="5" cols="40"></textarea></td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <input type="radio" name="gender" value="female" /> Female
                <input type="radio" name="gender" value="male" /> Male
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" name="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}export default HELLO;