import { useEffect, useState } from "react";
import { PostSites } from "./GetApi";

export const HandleDropdown = () => {
  const [site, setSite] = useState({
    fromDate: null,
    toDate: null,
    siteName: null,
  });
  const [siteNames, setSiteNames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await PostSites(site);

        console.log(res.data);
        const data = res.data.result;
        if (Array.isArray(data)) {
          const names = data.map((item) => item.siteName);
          setSiteNames(names);
        }
      } catch (error) {
        console.log(error.message || "message this");
      }
    };

    fetchData();
  }, []);

  const handleSiteChange = (e) => {
    const selectedSite = e.target.value;
    setSite((prevState) => ({ ...prevState, siteName: selectedSite }));
    console.log(selectedSite);
  };

  return (
    <select
      id="siteDropdown"
      value={site.siteName || ""}
      onChange={handleSiteChange}
      style={{ width: "50%" }}
    >
      <option value="" disabled>
        Select a site
      </option>
      {siteNames.map((name, index) => (
        <option key={index} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
