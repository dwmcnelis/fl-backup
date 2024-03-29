/* eslint-disable max-statements */

import { Link } from 'react-router-dom'

const symbols = {
  Aqua: '/assets/images/symbols/aqua.png',
  Beast: '/assets/images/symbols/beast.png',
  BeastWarrior: '/assets/images/beast-warrior.png',
  Continuous: '/assets/images/symbols/continuous.png',
  Counter: '/assets/images/symbols/counter.png',
  Cyberse: '/assets/images/symbols/cyberse.png',
  DARK: '/assets/images/symbols/dark.png',
  Dinosaur: '/assets/images/symbols/dinosaur.png',
  DIVINE: '/assets/images/symbols/divine.png',
  DivineBeast: '/assets/images/symbols/divine-beast.png',
  Dragon: '/assets/images/symbols/dragon.png',
  EARTH: '/assets/images/symbols/earth.png',
  Equip: '/assets/images/symbols/equip.png',
  Fairy: '/assets/images/symbols/fairy.png',
  Field: '/assets/images/symbols/field.png',
  Fiend: '/assets/images/symbols/fiend.png',
  FIRE: '/assets/images/symbols/fire.png',
  Fish: '/assets/images/symbols/fish.png',
  Insect: '/assets/images/symbols/insect.png',
  LIGHT: '/assets/images/symbols/light.png',
  LinkSymbol: '/assets/images/symbols/link.png',
  Machine: '/assets/images/symbols/machine.png',
  Normal: '/assets/images/symbols/normal.png',
  Plant: '/assets/images/symbols/plant.png',
  Psychic: '/assets/images/symbols/psychic.png',
  Pyro: '/assets/images/symbols/pyro.png',
  QuickPlay: '/assets/images/symbols/quick-play.png',
  Rank: '/assets/images/symbols/rank.png',
  Reptile: '/assets/images/symbols/reptile.png',
  Ritual: '/assets/images/symbols/ritual.png',
  Rock: '/assets/images/symbols/rock.png',
  Scale: '/assets/images/symbols/Scale.png',
  SeaSerpent: '/assets/images/symbols/sea-serpent.png',
  Spell: '/assets/images/symbols/spell.png',
  Spellcaster: '/assets/images/symbols/spellcaster.png',
  Star: '/assets/images/symbols/star.png',
  Thunder: '/assets/images/symbols/thunder.png',
  Trap: '/assets/images/symbols/trap.png',
  Warrior: '/assets/images/symbols/warrior.png',
  WATER: '/assets/images/symbols/water.png',
  WIND: '/assets/images/symbols/wind.png',
  WingedBeast: '/assets/images/symbols/winged-beast.png',
  Wyrm: '/assets/images/symbols/wyrm.png',
  Zombie: '/assets/images/symbols/zombie.png'
}

export const CardRow = (props) => {
    const { card, status } = props
    const { category, attribute, level, rating, scale, atk, def } = card
    const stats = []
  
    if (category === 'Monster') {
      stats.push(card.type)
      if (card.normal) stats.push("Normal")
      if (card.fusion) stats.push("Fusion")
      if (card.ritual) stats.push("Ritual")
      if (card.synchro) stats.push("Synchro")
      if (card.xyz) stats.push("Xyz")
      if (card.pendulum) stats.push("Pendulum")
      if (card.link) stats.push("Link")
      if (card.flip) stats.push("Flip")
      if (card.gemini) stats.push("Gemini")
      if (card.spirit) stats.push("Spirit")
      if (card.toon) stats.push("Toon")
      if (card.tuner) stats.push("Tuner")
      if (card.union) stats.push("Union")
      if (card.effect) stats.push("Effect")
    }
  
    const line = stats.join(' / ')
    const symbol = symbols[card.attribute] || symbols[card.category]
    const symbol2 = card.link ? `/assets/images/arrows/${card.arrows}.png` :
      card.xyz ? symbols.Rank :
      category === 'Monster' ? symbols.Star :
      card.icon ? symbols[card.icon.replace('-', '')] :
      ''
  
    const line2 = card.link ? `Link ${rating}` :
    card.xyz ? `Rank ${level}` :
    category === 'Monster' ? `Level ${level}` :
    card.icon
  
    const symbol3 = category === 'Monster' && card.type ? symbols[card.type.replace(/[\s-]/g, '')] : null
    const evenOrOdd = props.index % 2 ? 'even' : 'odd'
    const filePath = `/assets/images/cards/${card.ypdId}.jpg`
    
    return (
        <tr className={`${evenOrOdd}-search-results-row`}>
          <td className="no-padding-2" style={{verticalAlign: 'top'}}>
              <Link className="black-text" to={`/cards/${
                  card.name.replaceAll('%', '%252525')
                  .replaceAll('/', '%2F')
                  .replaceAll(' ', '_')
                  .replaceAll('#', '%23')
                  .replaceAll('?', '%3F')
                  }`}
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  <div className='card-image-cell'>
                      <img
                      className="card-image"
                      src={filePath}
                      style={{width: '96px'}}
                      alt={card.name}
                      />
                      {
                      status ? (
                          <img
                          className="small-status-icon"
                          src={`/assets/images/emojis/${status}.png`}
                          alt={status}
                          />
                      ) : ''
                      }
                  </div>
              </Link>
          </td>
          <td className="no-padding-2" style={{verticalAlign: 'top'}}>
              <Link className="black-text" to={`/cards/${
                  card.name.replaceAll('%', '%252525')
                  .replaceAll('/', '%2F')
                  .replaceAll(' ', '_')
                  .replaceAll('#', '%23')
                  .replaceAll('?', '%3F')
                  }`}
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  <table className="inner-cardRow-table">
                      <tbody>
                          <tr>
                          <th
                              colSpan="4"
                              style={{
                              textAlign: 'left',
                              fontSize: '24px',
                              borderBottom: '2px solid #CFDCE5'
                              }}
                          >
                              {card.name}
                          </th>
                          <th
                              colSpan="2"
                              style={{
                              fontWeight: 'normal',
                              fontSize: '14px',
                              textAlign: 'right',
                              padding: '10px 20px 20px 10px',
                              borderBottom: '2px solid #CFDCE5'
                              }}
                          >
                              {card.tcgDate.substring(0, 10)}
                          </th>
                          </tr>
                          <tr>
                          <td height="25px" width="90px" style={{borderRight: '2px solid #CFDCE5'}}>
                              <img
                              src={symbol}
                              height="24px"
                              style={{verticalAlign: 'middle'}}
                              alt="symbol"
                              />
                              {' ' + (attribute || category.toUpperCase())}
                          </td>
                          {symbol2 ? (
                              <td height="25px" width="120px" style={{borderRight: '2px solid #CFDCE5'}}>
                              <img
                                  src={symbol2}
                                  margin="0px"
                                  height="24px"
                                  style={{verticalAlign: 'middle'}}
                                  alt="level/category"
                              />
                              {' ' + line2}
                              </td>
                          ) : (
                              <td height="25px" width="120px" />
                          )}
                          {stats.length > 1 ? (
                              <td height="25px" width="300px" style={{borderRight: '2px solid #CFDCE5'}}>
                              <img
                                  src={symbol3}
                                  margin="0px"
                                  height="24px"
                                  style={{verticalAlign: 'middle'}}
                                  alt="level/category"
                              />
                              {' ' + line}
                              </td>
                          ) : (
                              <td height="25px" width="220px" />
                          )}
                          {atk !== null ? (
                              <td height="25px" width="100px" style={{borderRight: '2px solid #CFDCE5'}}>
                              {'ATK: ' + atk}
                              </td>
                          ) : (
                              <td height="25px" width="100px" />
                          )}
                          {def !== null ? (
                              <td height="25px" width="100px" style={{borderRight: '2px solid #CFDCE5'}}>
                              {'DEF: ' + def}
                              </td>
                          ) : (
                              <td height="25px" width="100px" />
                          )}
                          <td />
                          </tr>
                          {card.pendulum ? (
                              <tr>
                              <td height="25px" width="110px" style={{borderRight: '2px solid #CFDCE5', borderTop: '2px solid #CFDCE5'}}>
                                  <img
                                  src={symbols.Scale}
                                  height="24px"
                                  style={{verticalAlign: 'middle'}}
                                  alt="Scale"
                                  />
                                  {' Scale ' + scale}
                              </td>
                              <td
                                  colSpan="5"
                                  className="cardrow-description"
                                  style={{fontSize: '16px', borderTop: '2px solid #CFDCE5'}}
                              >
                                  {
                                  card.description.includes('[ Pendulum Effect ]') ? 
                                  card.description.slice(20, card.description.indexOf('----')) :
                                  ''
                                  }
                              </td>
                              </tr>
                          ) : (
                              <tr></tr>
                          )}
                          {card.pendulum ? (
                              <tr>
                              <td
                                  colSpan="6"
                                  className="cardrow-description"
                                  style={{padding: '10px 20px 20px 10px', fontSize: '16px', borderTop: '2px solid #CFDCE5'}}
                              >
                                  {
                                  card.description.includes('[ Monster Effect ]') ? 
                                  card.description.slice(card.description.indexOf('[ Monster Effect ]') + 19) :
                                  card.description.includes('[ Flavor Text ]') ?
                                  <i>{card.description.slice(card.description.indexOf('[ Flavor Text ]') + 16)}</i> :
                                  card.description
                                  }
                              </td>
                              </tr>
                          ) : (
                              <tr>
                              <td
                                  colSpan="6"
                                  className="cardrow-description"
                                  style={{padding: '10px 20px 20px 10px', fontSize: '16px', borderTop: '2px solid #CFDCE5'}}
                              >
                                  {
                                  card.normal ? <i>{card.description}</i> : card.description
                                  }
                              </td>
                              </tr>
                          )}
                      </tbody>
                  </table>
              </Link>
          </td>
        </tr>
    )
}
