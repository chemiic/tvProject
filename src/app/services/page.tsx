'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import React, { useState } from 'react';
import {Menu} from "@/components/Menu";
import {ShadowBox} from "@/shared/ShadowBox";


export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'artists' | 'brands' | 'athletes'>('artists');
  return (
      <div style={{width: '900px', height: '100vh'}} className={"flex flex-col mt-[60px] gap-2.5"}>
          <Menu/>
          <ShadowBox>
            <div className="flex gap-4 mb-4">
              <button
                className={`px-4 py-2 rounded-lg font-semibold hover:bg-[#99999920] hover:cursor-pointer ${activeTab === 'artists' && 'bg-[#00000060]'}`}
                onClick={() => setActiveTab('artists')}
              >
                Artists
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold hover:bg-[#99999920] hover:cursor-pointer ${activeTab === 'brands' && 'bg-[#00000060]'}`}
                onClick={() => setActiveTab('brands')}
              >
                Brands
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-semibold hover:bg-[#99999920] hover:cursor-pointer ${activeTab === 'athletes' && 'bg-[#00000060]'}`}
                onClick={() => setActiveTab('athletes')}
              >
                Athletes
              </button>
            </div>
            {activeTab === 'artists' && <div>
              <p>Pushing the limits of media by creating content that stands out with a style that’s all our own.
                Whether it’s for artists, athletes, or brands, we capture high-impact visuals that help elevate your
                online presence and connect with your audience in a creative way.</p>
              <h5>Music videos</h5>
              
            </div>}
            {activeTab === 'brands' && <div>Brands content</div>}
            {activeTab === 'athletes' && <div>Athletes content</div>}
          </ShadowBox>
      </div>
  );
}
