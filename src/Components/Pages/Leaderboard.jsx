import React from "react";
import Table from "react-bootstrap/Table";
import Caret from "../../assets/icons/uiwdown.svg";
import Trophy from "../../assets/icons/trophy.svg";
import Profile from "../../assets/icons/profile-fill.svg";
import GemStone from "../../assets/icons/gemstone.svg";
import "../../Styles/LeaderBoard.css";

const Leaderboard = () => {
  return (
    <>
      <div>
        <h4>LEADERS BOARD</h4>
      </div>
      <div className="table-container">
        <Table responsive="sm">
          <thead className="table-head">
            <tr>
              <th>
                Rank <img src={Trophy} alt="trophy" />
              </th>
              <th>
                User <img src={Profile} alt="profile" />
              </th>
              <th>
                User <img src={GemStone} alt="gems" />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>XXX XXX 5467</td>
              <td>2850</td>
            </tr>

            <tr>
              <td>2</td>
              <td>XXX XXX 5467</td>
              <td>2850</td>
            </tr>

            <tr>
              <td>3</td>
              <td>User</td>
              <td>2700</td>
            </tr>
          </tbody>
        </Table>

        <div className="more-link">
          <a href="#">
            More <img className="img" src={Caret} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
