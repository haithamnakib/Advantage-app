import React, { Component } from 'react'
import Table from '../css/Table.css'
import { Link, Route } from "react-router-dom";
import { getAccount } from "../actions/actions";
import actions from '../redux/actions/users';
import usersActions from '../redux/actions/users';
import { connect } from 'react-redux';
import '../css/Updates.scss';


class Updates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
    this.name="";
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
    const {name} = this.props.location.state;
    this.name = name;

    return (
      
      <div id='layout'>
 <Link to={{
                  pathname:'/MainMenu',
                  state:{username:this.name}
               }} >   Back to MainMenu? </Link>
        <div id='left' className={leftOpen} >
          <div className='icon'
            onClick={this.toggleSidebar} >
            &equiv;
              </div>
          <div className={`sidebar ${leftOpen}`} >
            <div className='header'>
              <h3 className='title'>

              </h3>
            </div>
            <div className='content'>
              <h3>Why Insurance is Important?</h3>
              <img src={require('../css/Capture2.png')} height={200} width={300}></img>
              <p> </p>
              <a target="_blank" href="https://economictimes.indiatimes.com/topic/life-insurance-industry">Live Updates Accoring to the EconomicTimes!</a>
              <p>
                Insurance contributes a lot to the general economic growth of the society by provides stability to the functioning of process. The insurance industries develop financial institutions and reduce uncertainties by improving financial resources.
                      </p>
              <p><b>1. Provide safety and security:</b>
                <p> </p>
Insurance provide financial support and reduce uncertainties in business and human life. It provides safety and security against particular event. There is always a fear of sudden loss. Insurance provides a cover against any sudden loss. For example, in case of life insurance financial assistance is provided to the family of the insured on his death. In case of other insurance security is provided against the loss due to fire, marine, accidents etc.</p>
<img src={require('../css/Capture9.png')} height={200} width={300}></img>
<p></p>
              <p><b>2. Generates financial resources:</b>
                <p></p>
Insurance generate funds by collecting premium. These funds are invested in government securities and stock. These funds are gainfully employed in industrial development of a country for generating more funds and utilised for the economic development of the country. Employment opportunities are increased by big investments leading to capital formation.</p>
<img src={require('../css/Capture8.png')} height={200} width={300}></img>
<p></p>
              <p><b>3. Life insurance encourages savings:</b>
                <p> </p>
Insurance does not only protect against risks and uncertainties, but also provides an investment channel too. Life insurance enables systematic savings due to payment of regular premium. Life insurance provides a mode of investment. It develops a habit of saving money by paying premium. The insured get the lump sum amount at the maturity of the contract. Thus life insurance encourages savings.</p>
<img src={require('../css/Capture7.png')} height={200} width={300}></img>
<p></p>
              <p><b>4. Promotes economic growth:</b></p>
              <p>Insurance generates significant impact on the economy by mobilizing domestic savings. Insurance turn accumulated capital into productive investments. Insurance enables to mitigate loss, financial stability and promotes trade and commerce activities those results into economic growth and development. Thus, insurance plays a crucial role in sustainable growth of an economy.</p>
              <img src={require('../css/Capture6.png')} height={200} width={300}></img>
              <p></p>
              <p><b>5. Medical support:</b>
                <p> </p>
A medical insurance considered essential in managing risk in health. Anyone can be a victim of critical illness unexpectedly. And rising medical expense is of great concern. Medical Insurance is one of the insurance policies that cater for different type of health risks. The insured gets a medical support in case of medical insurance policy.</p>
<img src={require('../css/Capture3.png')} height={200} width={300}></img>
<p></p>
              <p><b>6. Spreading of risk:</b>
                <p> </p>
Insurance facilitates spreading of risk from the insured to the insurer. The basic principle of insurance is to spread risk among a large number of people. A large number of persons get insurance policies and pay premium to the insurer. Whenever a loss occurs, it is compensated out of funds of the insurer.
<img src={require('../css/Capture4.png')} height={200} width={300}></img>
<p> </p>
                <b>7. Source of collecting funds:</b>
                <p> </p>
Large funds are collected by the way of premium. These funds are utilised in the industrial development of a country, which accelerates the economic growth. Employment opportunities are increased by such big investments. Thus, insurance has become an important source of capital formation.</p>
<img src={require('../css/Capture5.png')} height={200} width={300}></img>
            </div>
          </div>
        </div>

        <div id='main'>
          <div className='header'>
            <h4 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
              Here You Can Explore And Know More!
                  </h4>
          </div>
          <div className='content'>
            <h3></h3><br />
            <img src={require('../css/Capture1.PNG')} height={500} width={700}></img>
            <p> </p>
            <a target="_blank" href="https://www.iii.org/article/how-choose-right-type-life-insurance">Click Here!</a>
            <p>
            There are two major types of life insurance—term and whole life. Whole life is sometimes called permanent life insurance, and it encompasses several subcategories, including traditional whole life, universal life, variable life and variable universal life. In 2018, 4.0 million individual life insurance policies bought were term and about 5.9 million were whole life, according to the <a target="_blank" href="https://www.acli.com/posting/rp19-010">American Council of Life Insurers.</a>
                  </p><br />
           <p>
           <img src={require('../css/Capture10.png')} height={500} width={750}></img>
           </p><br />
           <h4>Analysis of Lebanon’s Insurance Sector:</h4>
            <p>
            In the midst of a challenging economic environment, the insurance sector in Lebanon has
shown resiliency after it has been growing over the past years and expanding its customer
base. The relatively large size of the non-life insurance segment is dominated by health
insurance which is expected to continue expanding steadily in face of the growing ageing
population and the rising health care costs. On the other hand, price competition in the main
sub-sectors within the non-life insurance segment, has hampered insurers’ profitability, and
this is expected to limit the expansion of insurance premiums in motor and property lines. As
to the life insurance segment, premium growth is limited as not all households in Lebanon
acknowledge the benefits of life insurance and are able to afford it. 
</p><br />
<img src={require('../css/Capture11.PNG')} height={400} width={650}></img>
<p></p>
<p>
Though Lebanon's insurance sector is relatively small in size and fragmented, it is still
able to grow in face of challenging economic conditions. Insurance premiums in Lebanon
have been rising steadily and insurers have proven resiliency and discipline in general
underwriting. One of the main weaknesses of the sector is that most insurers lack access
to capital. Nevertheless, the market is open to participation by regional and multinational
companies that in turn have access to capital and to global financial markets.
</p><br/>
<p></p>
<img src={require('../css/Capture12.PNG')} height={400} width={650}></img>
<p></p>
<p>
Lebanon’s non-life insurance market is fragmented into several sub-sectors, yet it is
dominated by the medical health insurance with a share of 42% of total non-life premiums.
It is followed by motor vehicle and property insurance with a share of 33% and 10%,
respectively.

The importance of medical health insurance as a sub-sector, given the ageing of the
Lebanese population and the rising costs associated to healthcare, underpins the sector’s
ability to sustain growth in premiums over the coming years. 
</p><br/>
<img src={require('../css/Capture13.PNG')} height={400} width={650}></img>
<p></p>
<p>
The insurance market in Lebanon is comprised of 52 companies aggregately generating
USD 1.6 billion gross written insurance premiums in 2016. As a result, Lebanon’s insurance
penetration rate – premiums relative to the size of the economy - was estimated at 3.08%
in 2016, thus positioning Lebanon in high rankings both, globally and regionally. It is worth
noting that in its latest annual survey, Swiss Re estimated Lebanon’s insurance penetration
rate at 3.4% of GDP in 2015, with a total of USD 1.5 billion gross written premiums, positioning
it in 42nd position in the world and in 1st position in the Middle East region in the year 2015.
Over the past five years, total gross written premiums (GwP) rose by an average of 5.4%
where gross life and non-life written premiums increased by an average of 4.7% and 5.7%,
respectively. According to BMI Research estimations, Lebanon’s gross non-life premiums
make up the highest share of total gross written premiums and are forecasted at 71.6% in
2016, while gross life premiums are estimated to be around 28.4% of the total.
</p><br/>
<img src={require('../css/Capture14.PNG')} height={400} width={650}></img><br/>
<h4>Insurance Density:</h4>
<p>In its latest annual survey of the global insurance market for the year 2015, Swiss Re
indicated that Lebanon ranked in 62nd place among the largest 88 markets and 6th among
12 Arab markets in terms of gross written premiums. In the Arab world, Lebanon came
ahead of Algeria, Oman, Kuwait, Tunisia, Jordan, and Bahrain.
Moreover, Swiss Re estimated Lebanon’s insurance density, or premiums per capita at USD
259.9 in 2015, thus ranking in 55th place globally and in 6th place within the Arab world. </p>
          </div>
        </div>

        <div id='right' className={rightOpen} >
          <div className='icon'
            onClick={this.toggleSidebar} >
            &equiv;
              </div>
          <div className={`sidebar ${rightOpen}`} >
            <div className='header'>
              <h3 className='title'>

              </h3>
            </div>
            <div className='content'>
              <h3>How does insurance work?</h3><br />
              <p>When people buy insurance, they put their money into a pool with many others. Some of that pool of money helps the policyholders who suffer a hardship in that period. The hardship can be home, auto or business losses. You are covered only for losses written in your contract, not for predictable events.<br/>
When a hardship or loss occurs, a claim is made. This is an official request for the insurer to pay for a covered loss. The insured’s agent or broker can assist in claiming benefits. Supporting documents will be required, depending on the type of loss (for example, photographs of an injury or property damage for an accident or property insurance claim, or a death certificate for a life insurance claim) during claims processing or claims investigation.</p>
            <br/>
            <h4>Where do your premiums go?</h4><br/>
            <p>Insurers put premiums to pay claims costs, investments, and operational expenses. They practice diligent financial management so that claims can be paid. For instance, they invest in low-risk investments that can be easily liquidated in case they need to pay out claims. They also set money aside as a legal reserve. They are required by law to maintain this amount. The legal reserve guarantees that an insurer can pay a large number of claims within a short period of time (such as in cases of disaster, for example).</p>
           <br/>
           <h4>Applying for insurance:</h4><br/>
           <p><h5>Insurers will evaluate whether they can issue a policy based on certain criteria such as:</h5>

-Age<br/>
-Medical history<br/>
-Previous claims made<br/>
-Amount of coverage you are requesting</p><br/>
<h3>Learn some Insurance Defenitions?</h3><br/>
<p><b>Policy –</b> a legal contract between you and the insurer. It details what risks are covered, under what circumstances the insurer will make a payment to you, how much money and what type of benefit you will receive if you make a claim.<br/>
<br/>
<b>Policyholder –</b> the insured or the person covered under the policy.<br/>
<br/>
<b>Coverage –</b> the amount of protection you have bought. It is also the maximum amount the insurance company will pay you if you make a claim for loss or event covered by your policy.<br/>
<br/>
<b>Benefit –</b> the amount the insurer will pay you if the insurer accepts your claim.<br/>
<br/>
<b>Premium –</b> the amount you pay for the insurance.<br/>
<br/>
<b>Cash value –</b> this is the amount the insurer pays to the policyholder when a life insurance policy is cancelled. It can also be an amount added to the death benefit and can be paid upon the insured’s death. This term is used with permanent life insurance policies.<br/>
<br/>
<b>Death benefit –</b> the amount the insurer will pay the beneficiary or beneficiaries upon the insured’s death.<br/>
<br/>
<b>Claim –</b> this is the official notice to your insurer to be paid for a loss or event covered by your insurance policy.<br/>
<br/>
<b>Beneficiary –</b> this is the person or entity the insured names or assigns to receive the proceeds of the policy. A beneficiary can be revocable (can be changed at any time without informing the beneficiary) or irrevocable (can’t be changed without the beneficiary’s written permission).<br/>
<br/>
<b>Deductible –</b> the amount you agree to pay before the insurer pays the rest.<br/>
<br/>
<b>Exclusions –</b> things that are not covered by your policy. For example, some health insurance policies may exclude certain medical conditions you had before you applied for insurance or a travel insurance policy may exclude claims if you travel to a high-risk country. This is why it is important to read your policy thoroughly to check what it covers and what it doesn’t cover so that there will be no surprises when the time to claim comes.<br/>
<br/>
<b>Risk –</b> probability or likelihood that an insured event, such as loss, injury or death, will happen while the policy is in effect.<br/>
<br/>
<b>Rider –</b> it is a clause or term added to your insurance policy to provide protection. This has an additional cost because it covers risks not covered in the basic policy.
<br/>
<b>Term –</b> the time period you are covered by your policy.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Updates;

