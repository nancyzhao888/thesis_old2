# Concept Development

## Title
**The International Afterlife of a Broadway Musical**

## Topic
* Broadway is no longer contained within just the 12 blocks and 40 theatres in New York. It has become a "brand" that is well-known and exported across the entire world. However, while lots of eyes and ears are on the Great White Way, the theatre industry has hardly examined this mechanisms of international business and Broadway’s cultural impact.
* Through international touring and international productions, each musical theatre piece has become a "brand" of its own created a global network of audience. 
* This visualization uses weekly Broadway performance data from the Broadway League and international touring data from [...] to follow the global distribution of [how many] Broadway musical titles through [time] and across continents to see the dynamics of cultural transmission, to visualize how a market or a musical brand has grown, and more importantly, to understand the motivation behind this global distribution.

## Related Work
* Existing work on this topic is very limited and generally ineffective – look into concert touring examples.
* Some visualizations cover reasonably sized datasets but lack any type of fluid interactivity. Views are static and the level of granularity in most of the views does not allow interesting trends to emerge. 
[![](https://github.com/nancyzhao888/thesis/blob/master/writing/setFM.png)](http://www.setlist.fm/stats/concert-map/bruce-springsteen-2bd6dcce.html)
* Some visualizations focus on a hub-and-spoke type visualization. Although geographically accurate, these visualizations emphasize an uninteresting part of the data. Users are not interested in the paths travelled by artists between venues. (This likely is more reflective of flight paths and highway locations.) 
[![](https://github.com/nancyzhao888/thesis/blob/master/writing/rollingStone.png)](http://rollingstones.vizzuality.com/#/)
* No visualizations that was found online attempt to visualize theatre touring data that I aggregate and visualize in this project – not domestically let alone internationally. 

## Significance
* Contribute to creating a new database that amalgamate world touring data for Broadway musicals.
* ......

## Design Study
Three visual perspectives:

1. **Aggregated View**
   * _Geographical pattern of the distribution_
   * _Understanding trends & motivation_
        * Does success on Broadway mean success abroad?
        * Does musicals of book or adaptation increase familiarity and in turn success of the title aboard?
        * Other qualitative attributes could include: female/male lead cast; genre/themes
2. **Title Perspective**
   * _Timing of title popularity_: Eg. The original Broadway production of Chicago opened on June 3, 1975. It received mixed reviews and encountered multiple setbacks during its run. However, the 1996 Broadway revival was jaw-droppingly successful and thus began its international life.
   * _Visualizing lifeline of the title_
   * _How has it been received across the world over time?_
3. **Market Perspective**
   * _Timing of market emergence_: Europe has been online for a long time with Broadway touring / local production; yet, Asia has only been online for a short time.
   * _Is a certain market more welcoming of English versions or local language version?_
   * _Is there a seasonal trend of Broadway touring in a certain area?_

## Goals (Previous)
* Understanding **global distribution** | _geospatial analysis_
  * When was a show on Broadway?
  * Where and when did it go after that?
  * What was its distribution trajectory across the globe over time?
* Understanding **timing** | 
  * _Timing of market emergence_: Europe has been online for a long time with Broadway touring / local production; yet, Asia has only been online for a short time.
  * _Timing of title popularity_: Eg. The original Broadway production of Chicago opened on June 3, 1975. It received mixed reviews and encountered multiple setbacks during its run. However, the 1996 Broadway revival was jaw-droppingly successful and thus began its international life.
* Understanding **what motivated the global distribution** | _qualitative analysis_
  * Does success on Broadway mean success abroad?
  * Does musicals of book or adaptation increase familiarity and in turn success of the title aboard?
  * Does international touring drive more global distribution or local language version of Broadway titles?
  * Other qualitative attributes could include: female/male lead cast; genre/themes

## Understanding Audience
* Touring production producers
  * Understanding global theatre markets: interest & appetite
* Broadway licensing companies
  * Licensing companies represent “titles”
  * Understanding the competitive landscape; popularity of titles
* Authors
  * Understanding lifeline of his/her work

## Evidence and Data
#### Data Overview
* Source 1: Broadway Database
* Source 2: Wikipedia
* Potential Alternative: Licensing data from licensing companies / original producers / authors
  * One licensing company on Broadway - Theatrical Rights Worldwide, have agreed to share public data with me.

#### Potential Issues with Data Collection
* Multiple Sources: During the lifetime of a musical theatre piece, its license is controlled by different parties at different stages. Due to the original producers' financial participation in a production, they have underlying rights for the piece as well. Therefore, before a piece is acquired and housed under a licensing company, the original producers control most of the licensing rights. The first round of international tour / replica productions are usually done by the original producers themselves. Therefore, they would be the ones who have the data for that period of time.

#### Data Collection Strategy
* Pick case study titles (eg.20) that have easier access to their international touring data to create a prototype;
* Approach producers / licensing companies with the prototype to explain what the goal of the project is and request data support.

#### Variables
On Broadway:
* Show Title
* Location: Venue / City
* Week
* Gross (as indicator of success on Broadway)

Worldwide:
* Show Title
* Location: Venue / City
* Week
* Version: English / Local

Filters:
* Genre
* Adaptation
* Gender of Leading Cast
