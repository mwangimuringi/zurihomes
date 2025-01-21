<template>
    <form ref="formProperty" id="form_add_property">
        <div class="row">
            <fieldset>
                <legend>YOUR RENTAL/CRIMINAL HISTORY</legend>
                    <h4><i>Check only if applicable.</i></h4>   
                <br>
                <div class="col-12">
                    <p>Have you, your spouse, or any occupant listed in this Application ever:</p>
                    <input class="radio" type="radio" name="Previousevicted" value="evicted" id="radio"/>
                        <label for="radio">been evicted or asked to move out?</label>
                </div>
                <br>
                <div class="col-12">
                    <input class="radio" type="radio" name="Previousmoved" value="moved" id="radio"/>
                        <label for="radio">moved out of a dwelling before the end of the lease term without the
                        owner's consent?</label>  
                </div>
                <br>
                <div class="col-12">
                    <input class="radio" type="radio" name="Previousbankruptcy" value="bankruptcy" id="radio"/>
                        <label for="radioradioradio">declared bankruptcy?</label>
                </div>
                <br>
                <div class="col-12">
                    <input class="radior" type="radio" name="Previoussued" value="sued" id="radior"/>
                        <label for="radior">been sued for rent? </label>
                </div>
                <br>
                <div class="col-12">
                    <input class="radio" type="radio" name="Previousdamage" value="damage" id="radio"/>
                        <label for="radio">been sued for property damage?</label>
                </div>
                <br>
                <div class="col-12">
                    <input class="radio" type="radio" name="Previouscrime" value="crime" id="radio"/>
                        <label for="radio">been charged, detained, or arrested for a felony, misdemeanor
                            involving a controlled substance, violence to another person or destruction of
                            property, or a sex crime that was resolved by conviction, probation, deferred
                            adjudication, court ordered community supervision, or pretrial diversion?</label>
                </div>
                <br>
                <div class="col-12">
                    <input class="radio" type="radio" name="Previousfelony" value="felony" id="radio"/>
                        <label for="radio">been charged, detained, or arrested for a felony, misdemeanor involving a controlled
                            substance, violence to another person or destruction of property, or a sex crime that
                            has not been resolved by any method? Please indicate below the year, location and
                            type of each felony, misdemeanor involving a controlled substance, violence to
                            another person or destruction of property, or sex crime other than those resolved by
                            dismissal or acquittal.</label>
                            <p>We may need to discuss more facts before making a decision</p>        
                </div>
                <br>
                <div class="col-12">
                    <input class="radio" type="radio" name="Currentanswer" value="answer" id="radio"/>
                        <label for="message">You represent the answer is "no" to any item not checked above.</label><br/>
                </div>
            </fieldset> 
        </div>
    </form>
</template>