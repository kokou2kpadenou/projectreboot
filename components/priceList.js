import { useState } from "react";

export default ({ list }) => {
  const [search, SetSearch] = useState("");
  const [beast, setBeast] = useState(false);
  const [free, setFree] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="search-box">
        <div>
          <input
            style={{
              width: "100%",
              fontSize: "1.8rem",
              padding: ".5rem",
              margin: "1.5rem 0"
            }}
            type="text"
            value={search}
            onChange={e => SetSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <input
          type="checkbox"
          id="beast"
          checked={beast}
          onChange={e => setBeast(e.target.checked)}
        />
        <label htmlFor="beast">Beast</label>
        <input
          type="checkbox"
          id="free"
          checked={free}
          onChange={e => setFree(e.target.checked)}
        />
        <label htmlFor="free">Free</label>
        <label htmlFor="category">Type of Offer</label>

        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Refurbished">Refurbished</option>
          <option value="Service">Service</option>
          <option value="Software">Software</option>
        </select>
      </div>

      {list
        .filter(elt => {
          let match = true;
          if (beast) match = match && elt.extra === "BEAST";
          if (free) match = match && elt.price === "Free";
          if (search.length > 0)
            match =
              match &&
              elt.title.toLowerCase().search(search.toLowerCase()) >= 0;
          if (category) match = match && elt.type === category;
          return match;
        })
        .map(({ ID, title, desc, price, spec, restriction, extra, type }) => (
          <div key={ID} className="price-tile">
            <div className="title">{title}</div>
            <div>
              <span className="badge badge--1">{type}</span>
              {extra && <span className="badge badge--2">{extra}</span>}
            </div>
            <div className="price">{price}</div>

            <div>{desc}</div>
            <div className="spec">{spec}</div>
            <div>
              {restriction && (
                <span className="badge badge--3">{restriction}</span>
              )}
            </div>
          </div>
        ))}
      <style jsx>{`
        .price-tile {
          border-top: 1px solid #ddd;
          padding: 1.5rem 0;
        }

        .search-box {
          margin: 2rem 0;
        }

        label {
          padding: 0 5px;
        }
        .price-tile:last-of-type {
          border-bottom: 1px solid #ddd;
        }

        .title {
          font-size: 2.5rem;
        }

        .badge {
          display: inline-block;
          padding: 2px 5px;
          margin: 0 5px 0 0;
          color: #fff;
          font-size: 1.2rem;
          border-radius: 4px;
        }

        .badge--1 {
          background-color: var(--secondary-color);
        }
        .badge--2 {
          background-color: var(--tertiary-color);
        }
        .badge--3 {
          background-color: #999;
        }

        .spec {
          font-size: 1.2rem;
          // line-height: 1.2;
        }

        .price {
          font-size: 4rem;
          margin: 1rem 0;
        }
      `}</style>
    </>
  );
};
