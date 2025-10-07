import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const VSLSection = (): JSX.Element => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <Card className="w-full max-w-[1260px] mx-auto bg-[#ffffff01] rounded-[26.81px] shadow-[0px_32.39px_13.4px_#6c718003,0px_18.99px_11.17px_#6c71800a,0px_7.82px_7.82px_#6c718012,0px_2.23px_4.47px_#6c718014] border-[6.7px] border-solid border-[#f8f8f8]">
        <CardContent className="p-0 rounded-[26.81px] relative overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 bg-black rounded-[20.11px] -z-10" />

          <div className="flex flex-col md:flex-row h-full">
            {/* Video Player Side */}
            <div className="w-full md:w-1/2 lg:w-[700px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[500px] relative bg-black rounded-l-[20.11px] md:rounded-l-[20.11px] rounded-t-[20.11px] md:rounded-t-none overflow-hidden">
                {!isVideoPlaying ? (
                  // Video Thumbnail - Landscape Format
                  <div 
                    className="absolute inset-0 cursor-pointer group bg-gradient-to-br from-[#4f5bff]/20 to-black"
                    onClick={handlePlayVideo}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Video Info Overlay - Bottom Left on Desktop, Below on Mobile */}
                    <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 hidden md:block">
                      <div className="bg-black/60 backdrop-blur-sm rounded-[10px] p-3 sm:p-4 max-w-xs sm:max-w-md">
                        <div className="text-white text-base sm:text-lg [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold mb-1 sm:mb-2">
                          From Idea to Market Fit
                        </div>
                        <div className="text-white/80 text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                          7 minutes • How we launch successful products in 90 days
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge - Top Right */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm rounded px-2 py-1 sm:px-3 sm:py-2">
                      <span className="text-white text-xs sm:text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica]">
                        7:00
                      </span>
                    </div>

                    {/* Stats Overlay - Bottom Right on Desktop only */}
                    <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 hidden md:block">
                      <div className="bg-black/60 backdrop-blur-sm rounded-[10px] p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <div className="text-center">
                            <div className="text-[#4f5bff] text-lg sm:text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                              90 Days
                            </div>
                            <div className="text-white/80 text-[10px] sm:text-xs [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                              To Product-Market Fit
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-[#4f5bff] text-lg sm:text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                              50+
                            </div>
                            <div className="text-white/80 text-[10px] sm:text-xs [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                              Successful Products
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Video Placeholder (Loading State / Replace with actual video embed)
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 border-4 border-[#4f5bff] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <div className="text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                        Loading video...
                      </div>
                      <div className="text-xs text-white/60 mt-4 max-w-xs">
                        Here will be placed video about how we take products from idea to market fit
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile Video Info - Shows below video on mobile */}
              <div className="block md:hidden bg-black/90 p-4 rounded-b-[10px] -mt-1">
                <div className="text-white text-base [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold mb-2">
                  From Idea to Market Fit
                </div>
                <div className="text-white/80 text-sm [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] mb-3">
                  7 minutes • How we launch successful products in 90 days
                </div>
                {/* Mobile Stats */}
                <div className="flex items-center gap-6 pt-2">
                  <div className="text-center">
                    <div className="text-[#4f5bff] text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                      90 Days
                    </div>
                    <div className="text-white/80 text-xs [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                      To Product-Market Fit
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4f5bff] text-xl font-bold [font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica]">
                      50+
                    </div>
                    <div className="text-white/80 text-xs [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica]">
                      Successful Products
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side - Modal Text */}
            <div className="flex-1 bg-[#1c1c1c] rounded-b-[17.87px] md:rounded-b-none md:rounded-r-[17.87px] relative overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex flex-col h-full justify-center p-6 sm:p-8 md:p-12">
                <div className="max-w-md">
                  <h2 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-[36px] sm:leading-[42px] md:leading-[48px] mb-4 sm:mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    Why 90% of products fail to find market fit
                  </h2>

                  <div className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-6 sm:leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                    In the next 7 minutes learn the exact process we use to take products from idea to validated market fit.
                    <br />
                    <br />
                    While 90% of products fail to find their audience, our clients achieve{" "}
                    <span className="text-[#4f5bff]">87% success rate</span>{" "}
                    and build{" "}
                    <span className="text-[#4f5bff]">products users love</span>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};