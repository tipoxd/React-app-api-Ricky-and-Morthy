
export function Rating() {

    return (
        <> <div className="rating rating-xs">
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
        </>);

}