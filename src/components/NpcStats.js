import { npcAC, npcHP, npcSpeed, npcStr, npcDex, npcCon, npcInt, npcWis, npcCha, npcLang } from '../randomMaster';
import Table from 'react-bootstrap/Table';


export default function MonsterStats() {
  return (
    <>
    <Table responsive>
        <thead className="text-white">
            <tr>
                <th>STR</th>
                <th>DEX</th>
                <th>CON</th>
                <th>INT</th>
                <th>WIS</th>
                <th>CHA</th>
            </tr>
        </thead>
        <tbody className="text-white">
            <tr>
                <td>{npcStr}</td>
                <td>{npcDex}</td>
                <td>{npcCon}</td>
                <td>{npcInt}</td>
                <td>{npcWis}</td>
                <td>{npcCha}</td>
            </tr>
        </tbody>
    </Table>
    <div className="d-flex flex-column">
        <div className="d-flex justify-content-between ps-4">
            <div>
                <span>Armor Class: </span>{npcAC}
            </div>
            <div className="ps-2">
                <span>Hit Points: </span>{npcHP}
            </div>
            <span></span>
        </div>
        <div className="d-flex flex-column">
        <div className="d-flex justify-content-between px-4">
            <div>
                <span>Speed:  </span>{npcSpeed}ft
            </div>
            <div>
                <span>Languages </span>{npcLang}
            </div>
        </div>
    </div>
    </div>
    </>
  );
}