import React from 'react';
import { Calendar, MapPin, Phone, Info, List } from 'lucide-react';
import { EVENT_DATA, HEADER_IMAGE_URL } from '../constants';

export const EventCard: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-none sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header Image Section */}
      <div className="relative bg-[#f8f5f2] w-full">
        {/* Decorative foliage - purely CSS/Tailwind simulation for the 'leaves' in the corner */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none overflow-hidden z-10">
             <div className="absolute -top-10 -left-10 w-24 h-48 bg-stone-400 rotate-45 transform blur-xl"></div>
        </div>
        
        {/* Main Card Image - 전체 영역 채우기 */}
        <div className="relative w-full">
          <img 
            src={HEADER_IMAGE_URL} 
            alt="Christmas Cantata Main Card" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pt-4 pb-4 bg-white relative">
        
        {/* Info Box */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
          {/* 초대 문구 */}
          <p className="text-gray-700 text-center text-base leading-relaxed mb-6 font-bold">
            크리스마스의 참된 의미를 담은 이야기 속으로<br />
            여러분을 초대합니다.
          </p>
          
          {/* 구분선 */}
          <div className="w-full h-px bg-gray-300 mb-6"></div>
          
          <div className="space-y-6">
            {/* Date */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                <Calendar className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-1">일시</h3>
                <p className="text-gray-600 text-sm font-light">{EVENT_DATA.date}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
               <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                <MapPin className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-1">장소</h3>
                <p className="text-gray-600 text-sm font-light">{EVENT_DATA.location}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                <Info className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-1">문의</h3>
                <p className="text-gray-600 text-sm font-light tracking-wide">{EVENT_DATA.contact}</p>
              </div>
            </div>

            {/* Program */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                <List className="w-5 h-5 text-gold-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-bold text-base mb-2">출연</h3>
                <ul className="space-y-1.5">
                  {EVENT_DATA.program.map((item, index) => (
                    <li key={index} className="text-gray-600 text-sm font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6 mb-2">
          <p className="text-gray-500 text-xs tracking-widest uppercase opacity-70">
            절대 망대, 절대 여정, 절대 이정표
          </p>
        </div>
      </div>
    </div>
  );
};