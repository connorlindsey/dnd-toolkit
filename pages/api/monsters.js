import monsterList from "../../data/monsterList.json"
import monsters from "../../data/monsters.json"

export default (req, res) => {
  res.status(200).json(monsterList)
}
