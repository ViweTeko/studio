"use client";

import { useState } from 'react';
import { Button } from './button';
import { uploadImage } from '@/services/image-upload';

interface ImageUploadProps {
  onChange: (imageUrl: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
      setPreviewImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await uploadImage(selectedImage);
      onChange(result.imageUrl); // Notify parent component with the image URL
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Image upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2"
      />
      {previewImageUrl && (
        <img
          src={previewImageUrl}
          alt="Preview"
          className="mb-2 max-h-48 rounded-md"
        />
      )}
      <Button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? 'Uploading...' : 'Upload Image'}
      </Button>
    </div>
  );
};

export default ImageUpload;
