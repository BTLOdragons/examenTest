import { supabaseClient } from "../supabaseClient.js";

export const getTags = async (req, res) => {
  try {
    const { data, error } = await supabaseClient.from('tags').select('*');

    if (error) {
      // use the correct variable name, and return immediately
      return res.status(500).json({ error: error.message });
    }

    // if you want to inspect the data, log it directly
    console.log(data, "1 2 buckle my shoes");

    // send one response and return
    return res.status(200).json(data);
  } catch (err) {
    // here err is your caught exception
    return res.status(500).json({ error: err.message });
  }
};


// export default getTags