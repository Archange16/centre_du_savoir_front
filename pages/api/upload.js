import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    // Créer le dossier uploads s'il n'existe pas
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error('Erreur création dossier upload:', error);
    }

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      filter: ({ mimetype }) => {
        return mimetype && mimetype.includes('image');
      },
    });

    const [fields, files] = await form.parse(req);
    
    if (!files.file || files.file.length === 0) {
      return res.status(400).json({ error: 'Aucun fichier image fourni' });
    }

    const file = files.file[0];
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const newPath = join(uploadDir, fileName);
    
    // Renommer le fichier pour éviter les collisions
    await writeFile(newPath, await file.arrayBuffer());
    
    const imageUrl = `/uploads/${fileName}`;
    
    res.status(200).json({ 
      success: true, 
      url: imageUrl,
      message: 'Image uploadée avec succès' 
    });
  } catch (error) {
    console.error('Erreur upload image:', error);
    if (error.message.includes('maxFileSize')) {
      return res.status(400).json({ error: 'Fichier trop volumineux (max 5MB)' });
    }
    res.status(500).json({ error: 'Erreur lors de l\'upload de l\'image' });
  }
}