

export const Booking = () => {
  return (
    <section className="book" id="book">
        <div className="container">
            <div className="main-text">
                <h1><span>B</span>ook</h1>
            </div>
            <div className="row">
                <div className="col-md-6 py-3 py-md-0">
                    <div className="card">
                        <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=826&t=st=1726470239~exp=1726470839~hmac=edb4909519d167515761a36380c72755e262dbcce6b70e2e95cb058f5c2e12b9" alt="" />
                    </div>
                    
                    </div> 
                    <div className="col-md-6 py-3 py-md-0" >
                        <form action="#">
                            <input type="text" className="form-control" placeholder="Where To" required /><br />
                            <input type="text" className="form-control" placeholder="How Many" required /><br />
                            <input type="date" className="form-control" placeholder="Arrivals" required /><br />
                            <input type="date" className="form-control" placeholder="Leaving" required /><br />
                            <textarea name="text" rows={5} className="form-control" placeholder="Enter your Name & Details"></textarea> <br />
                            <input type="submit" value="Book Now" className="submit" required/>
                        </form>
                    </div>
            </div>
        </div>
    </section>
  )
}
