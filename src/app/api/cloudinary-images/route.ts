import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const { resources } = await cloudinary.v2.search
      .expression('resource_type:image AND -folder:brains')
      .sort_by("public_id", "desc")
      .max_results(50)
      .execute();
    return NextResponse.json(resources);
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}