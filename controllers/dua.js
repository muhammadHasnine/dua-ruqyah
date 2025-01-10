import{ db } from "../app.js";

// 1. Fatch all categories

// 1.1. Fetch all categories in bangla
export const categoryBn = async (req,res)=>{
  try {
    const query = `SELECT id, cat_id, cat_name_bn, no_of_subcat, no_of_dua, cat_icon FROM category`;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
      // Rename columns dynamically before sending the response
      const renamedRows = rows.map((row) => {
        return {
          id:row.id,
          cat_id: row.cat_id,
          cat_name: row.cat_name_bn, // Renamed column
          no_of_subcat: row.no_of_subcat,
          no_of_dua: row.no_of_dua, 
          cat_icon:row.cat_icon 
        };
      });
      res.status(200).json(renamedRows);
  });
  } catch (error) {
    res.status(500).json({
      message:error
    })
  }
}

// 1.2. Fetch all categories in english
export const categoryEn = async (req,res)=>{
  try {
    const query = `SELECT id, cat_id, cat_name_en, no_of_subcat, no_of_dua, cat_icon FROM category`;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
     // Rename columns dynamically before sending the response
     const renamedRows = rows.map((row) => {
      return {
        id:row.id,
        cat_id: row.cat_id,
        cat_name: row.cat_name_en, // Renamed column
        no_of_subcat: row.no_of_subcat,
        no_of_dua: row.no_of_dua, 
        cat_icon:row.cat_icon 
      };
    });
    res.status(200).json(renamedRows);
  });
  } catch (error) {
    res.status(500).json({
      message:error
    })
  }
}




// 2. Fetch subcategories based on a category ID

// 2.1 Fetch subcategories based on a category ID in Bangla
 export const subcategoriesBn = async (req, res) => {
 try {
  const { cat_id } = req.params;

  if (!cat_id) {
    return res.status(400).json({ error: "cat_id is required" });
  }

  const query = `
    SELECT id, subcat_id, subcat_name_bn, cat_id, no_of_dua
    FROM sub_category
    WHERE cat_id = ?
  `;

  db.all(query, [cat_id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    // Rename columns dynamically before sending the response
    const renamedRows = rows.map((row) => {
      return {
        id:row.id,
        cat_id: row.cat_id,
        subcat_id: row.subcat_id,
        subcat_name: row.subcat_name_bn, // Renamed column
        no_of_dua: row.no_of_dua,
      };
    });
    res.status(200).json(renamedRows);
  });
 } catch (error) {
  res.status(500).json({
    message:error
  })
 }
};

// 2.2 Fetch subcategories based on a category ID in English
 export const subcategoriesEn = async (req, res) => {
 try {
  const { cat_id } = req.params;

  if (!cat_id) {
    return res.status(400).json({ error: "cat_id is required" });
  }

  const query = `
    SELECT id, subcat_id, subcat_name_en, cat_id, no_of_dua
    FROM sub_category
    WHERE cat_id = ?
  `;

  db.all(query, [cat_id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
     // Rename columns dynamically before sending the response
     const renamedRows = rows.map((row) => {
      return {
        id:row.id,
        cat_id: row.cat_id,
        subcat_id: row.subcat_id,
        subcat_name: row.subcat_name_en,  // Renamed column
        no_of_dua: row.no_of_dua,
      };
    });
    res.status(200).json(renamedRows);
  });
 } catch (error) {
  res.status(500).json({
    message:error
  })
 }
};


// 3. Fetch dua based on a category ID

// 3.1  Fetch dua based on a category ID in Bangla
export const duaBn = async (req, res) => {
  try {
   const { cat_id } = req.params;
 
   if (!cat_id) {
     return res.status(400).json({ error: "cat_id is required" });
   }
 
   const query = `
     SELECT id, subcat_id,  cat_id,  dua_id, dua_name_bn, top_bn, dua_arabic, dua_indopak, transliteration_bn, translation_bn, bottom_bn, refference_bn, audio
     FROM dua
     WHERE cat_id = ?
   `;
 
   db.all(query, [cat_id], (err, rows) => {
     if (err) {
       return res.status(500).json({ error: err.message });
     }
     // Rename columns dynamically before sending the response
     const renamedRows = rows.map((row) => {
       return {
         id:row.id,
         cat_id: row.cat_id,
         subcat_id: row.subcat_id,
         dua_id: row.dua_id,
         dua_name: row.dua_name_bn, //Rename column
         top: row.top_bn, //Rename column
         dua_arabic:row.dua_arabic, 
         dua_indopak:row.dua_indopak,
         transliteration: row.transliteration_bn, //Rename column
         translation: row.translation_bn, //Rename column
         bottom:row.bottom_bn, //Rename column
         refference:row.refference_bn, //Rename column
         audio:row.audio
       };
     });
     res.status(200).json(renamedRows);
   });
  } catch (error) {
   res.status(500).json({
     message:error
   })
  }
 };

// 3.2  Fetch dua based on a category ID in English
export const duaEn = async (req, res) => {
  try {
   const { cat_id } = req.params;
 
   if (!cat_id) {
     return res.status(400).json({ error: "cat_id is required" });
   }
 
   const query = `
     SELECT id, subcat_id,  cat_id,  dua_id, dua_name_en, top_en, dua_arabic, dua_indopak, transliteration_en, translation_en, bottom_en, refference_en, audio
     FROM dua
     WHERE cat_id = ?
   `;
 
   db.all(query, [cat_id], (err, rows) => {
     if (err) {
       return res.status(500).json({ error: err.message });
     }
     // Rename columns dynamically before sending the response
     const renamedRows = rows.map((row) => {
       return {
         id:row.id,
         cat_id: row.cat_id,
         subcat_id: row.subcat_id,
         dua_id: row.dua_id,
         dua_name: row.dua_name_en, //Rename column
         top: row.top_en, //Rename column
         dua_arabic:row.dua_arabic, 
         dua_indopak:row.dua_indopak,
         transliteration: row.transliteration_en, //Rename column
         translation: row.translation_en, //Rename column
         bottom:row.bottom_en, //Rename column
         refference:row.refference_en, //Rename column
         audio:row.audio
       };
     });
     res.status(200).json(renamedRows);
   });
  } catch (error) {
   res.status(500).json({
     message:error
   })
  }
 };

