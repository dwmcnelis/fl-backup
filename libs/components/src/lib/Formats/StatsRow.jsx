
import { useNavigate } from 'react-router-dom'
import { ordinalize } from '@fl/utils'

//GET MEDAL
const getMedal = (elo) => {
  return !elo
    ? '/assets/images/emojis/gold.png'
    : elo <= 230
    ? '/assets/images/emojis/mad.png'
    : elo > 230 && elo <= 290
    ? '/assets/images/emojis/sad.png'
    : elo > 290 && elo <= 350
    ? '/assets/images/emojis/rock.png'
    : elo > 350 && elo <= 410
    ? '/assets/images/emojis/bronze.png'
    : elo > 410 && elo <= 470
    ? '/assets/images/emojis/silver.png'
    : elo > 470 && elo <= 530
    ? '/assets/images/emojis/gold.png'
    : elo > 530 && elo <= 590
    ? '/assets/images/emojis/platinum.png'
    : elo > 590 && elo <= 650
    ? '/assets/images/emojis/diamond.png'
    : elo > 650 && elo <= 710
    ? '/assets/images/emojis/master.png'
    : elo > 710 && elo <= 770
    ? '/assets/images/emojis/legend.png'
    : '/assets/images/emojis/god.png'
}

//GET TITLE
const getTitle = (elo) => {
  return !elo
    ? 'Gold'
    : elo <= 230
    ? 'Tilted'
    : elo > 230 && elo <= 290
    ? 'Chump'
    : elo > 290 && elo <= 350
    ? 'Rock'
    : elo > 350 && elo <= 410
    ? 'Bronze'
    : elo > 410 && elo <= 470
    ? 'Silver'
    : elo > 470 && elo <= 530
    ? 'Gold'
    : elo > 530 && elo <= 590
    ? 'Platinum'
    : elo > 590 && elo <= 650
    ? 'Diamond'
    : elo > 650 && elo <= 710
    ? 'Master'
    : elo > 710 && elo <= 770
    ? 'Legend'
    : 'Deity'
}

export const StatsRow = (props) => {
    const {index, stats} = props
    const {elo, wins, losses, player} = stats
    if (!player) return <tr/>
    const extension =  player.name.replaceAll('%', '%252525')
        .replaceAll('/', '%2F')
        .replaceAll(' ', '_')
        .replaceAll('#', '%23')
        .replaceAll('?', '%3F') + '#' + player.discriminator

    const evenOrOdd = props.index % 2 ? 'even' : 'odd'
    const displayName = player.name.length <= 24 ? player.name : player.name.slice(0, 24).split(' ').slice(0, -1).join(' ')
    const navigate = useNavigate()
    const goToPlayer = () => navigate(`/players/${extension}`)

    return (
        <tr onClick={() => goToPlayer()} className={`${evenOrOdd}-search-results-row`}>
            <td className="leaderboard-cell-1">{ordinalize(index + 1)}</td>
            <td className="leaderboard-cell-2">
                <div className="player-cell">
                    <img
                        className="player-cell-pfp"
                        src={`/assets/images/pfps/${stats.player.discordId}.png`}
                        onError={(e) => {
                                e.target.onerror = null
                                e.target.src="https://cdn.discordapp.com/embed/avatars/1.png"
                            }
                        }
                        alt={stats.player.name}
                    />
                    <div>{displayName}</div>
                </div>
            </td>
            <td className="leaderboard-cell-3">{Math.round(100 * elo)/100}</td>
            <td className="leaderboard-cell-4">
                <div className="medal-cell">
                    <div className="medal-title">{getTitle(elo)}</div>
                    <img width="32px" src={getMedal(elo)}/>
                </div>
            </td>
            <td className="leaderboard-cell-5">{wins}</td>
            <td className="leaderboard-cell-6">{losses}</td>
            <td className="leaderboard-cell-7">{(Math.round(1000 * wins / (wins + losses))/10).toFixed(1)}%</td>
        </tr>
    )
}
