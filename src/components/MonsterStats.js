import { monsterAC, monsterHP, monsterSpeed, monsterStr, monsterDex, monsterCon, monsterInt, monsterWis, monsterCha, monsterLang } from '../randomMaster';
import Table from 'react-bootstrap/Table';


export default function MonsterStats() {
  return (
    <div>
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
                <td>{monsterStr}</td>
                <td>{monsterDex}</td>
                <td>{monsterCon}</td>
                <td>{monsterInt}</td>
                <td>{monsterWis}</td>
                <td>{monsterCha}</td>
            </tr>
        </tbody>

    </Table>
        <div>
            <ul>
                <li><span>Armor Class: </span>{monsterAC}</li>
                <li><span>Hit Points: </span>{monsterHP}</li>
                <li><span>Speed: </span>{monsterSpeed}ft</li>
                <li><span>Languages: </span>{monsterLang}</li>
            </ul>
        </div>
    </div>

  );
}