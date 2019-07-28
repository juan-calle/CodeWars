/* Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions.
Complete the goals function to return his total goals (the sum) for all three leagues.

Note: the parameter for this function will always be a valid number.

Ex :

goals(5,10,2) == 5+10+2 = 17 */
/* jshint esversion:6 */

// SOLUTION
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goals = Array.prototype.slice.call(arguments);
  return goals.reduce((a, b) => a + b, 0);
}
