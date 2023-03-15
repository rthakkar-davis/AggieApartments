import '../css/Reviews.css';
import Review from './Review.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import WriteReviewModal from './WriteReviewModal';


function Reviews({reviews}) {

    const [reviewsList, setReviewsList] = useState(reviews);

    let numReview = reviews.length;
    let avgReview;
    let totalPoint = 0;

    let numAwesome = 0;
    let numGreat = 0;
    let numAvg = 0;
    let numPoor = 0;
    let numAwful = 0;

    for(let i = 0; i < numReview; i++){
        let rate = parseInt(reviews[i].rating)
        totalPoint += rate;
        if(rate == 5.0){
            numAwesome++;
        }
        else if(rate == 4.0){
            numGreat++;
        }
        else if(rate == 3.0){
            numAvg++;
        }
        else if(rate == 2.0){
            numPoor++;
        }
        else{
            numAwful++;
        }
    }

    function calculateBar(rating){
        return rating / numReview * 100;
    }
    /* Rounding the average to tenth */
    avgReview = (Math.round(totalPoint / numReview * 10) / 10).toFixed(1);

    return (
        <div className="rContainer" style={{borderRadius: "15px"}}>
            <h1> Reviews </h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{width: "350px", marginRight: "80px"}}>
                    <div style={{display:"flex", alignItems:"flex-end"}}>
                        <h1>{avgReview}</h1>
                        <p>/5</p>
                    </div>
                    {/*<ProgressBar now={avgBarValue} />*/}
                    <p><b>{numReview} reviews</b></p>
                    <div style={{width: "400px", marginTop: "20px", display: "flex"}}>
                        <div style={{display: "flex"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                                <p style={{marginRight: "10px", marginBottom: "60px"}}> Awesome </p>
                                <p style={{marginRight: "10px", marginBottom: "60px"}}> Great </p>
                                <p style={{marginRight: "10px", marginBottom: "60px"}}> Average </p>
                                <p style={{marginRight: "10px", marginBottom: "60px"}}> Poor</p>
                                <p style={{marginRight: "10px", marginBottom: "60px"}}> Awful </p>
                            </div>
                            <div>
                                <p style={{marginRight: "30px", marginBottom: "60px"}}> <b>5</b> </p>
                                <p style={{marginRight: "30px", marginBottom: "60px"}}> <b>4</b></p>
                                <p style={{marginRight: "30px", marginBottom: "60px"}}> <b>3</b></p>
                                <p style={{marginRight: "30px", marginBottom: "60px"}}> <b>2</b></p>
                                <p style={{marginRight: "30px", marginBottom: "60px"}}> <b>1</b> </p>
                            </div>
                        </div>
                        <div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: "40px"}}>
                                <ProgressBar style={{width: "210px", marginRight: "20px"}} now={calculateBar(numAwesome)} />
                                <p><b>{numAwesome}</b></p>
                            </div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: "40px"}}>
                                <ProgressBar style={{width: "210px", marginRight: "20px"}} now={calculateBar(numGreat)} />
                                <p><b>{numGreat}</b></p>
                            </div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: "40px"}}>
                                <ProgressBar style={{width: "210px", marginRight: "20px"}} now={calculateBar(numAvg)} />
                                <p><b>{numAvg}</b></p>
                            </div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: "40px"}}>
                                <ProgressBar style={{width: "210px", marginRight: "20px"}} now={calculateBar(numPoor)} />
                                <p><b>{numPoor}</b></p>
                            </div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: "40px"}}>
                                <ProgressBar style={{width: "210px", marginRight: "20px"}} now={calculateBar(numAwful)} />
                                <p><b>{numAwful}</b></p>
                            </div>
                        </div>
                    </div>
                    <WriteReviewModal reviewsList={reviewsList} setReviewsList={setReviewsList}/>
                </div>
                <div className='reviewContainer'>
                    {reviewsList.map((review) => (
                        <Review review={review}/>
                    ))}
                </div>
            </div>
        </div>
    );
  }
  
  export default Reviews;
  