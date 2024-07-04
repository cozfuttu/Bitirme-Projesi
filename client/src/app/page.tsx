import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import qa from "../../public/images/qa_hero.png";
import Image from "next/image";
import Link from "next/link";
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";

type Question = {
  question: string;
  context: string;
  answer: string;
};

const Home: React.FC = () => {
  return (
    <div className="m-8 mx-auto flex max-w-[1024px] flex-col p-8">
      {/* @ts-ignore */}
      <dotlottie-player
        src="https://lottie.host/05c179b8-e877-433a-a8c4-b0c07ef74339/vKFBnZsQsC.json"
        background="transparent"
        speed="1"
        style={{ width: "min(70vw, 400px)", height: "auto", margin: "0 auto" }}
        loop
        autoplay
      />

      <h1 className="text-2xl">Otomatik Soru Cevap Sistemleri</h1>
      <p>
        Otomatik Soru Cevap Sistemleri, kullanıcıların doğal dilde sordukları
        sorulara otomatik olarak yanıt veren bilgisayar programlarıdır. Bu
        sistemler, doğal dil işleme (NLP) tekniklerini kullanarak, soruların
        anlamını çözümlemekte ve uygun cevapları veritabanları, dokümanlar veya
        önceden belirlenmiş bilgilerden çekmektedir.
      </p>

      <p className="mt-4">OSCS&apos;lerin temel bileşenleri şunlardır:</p>
      <ol className="ml-4 list-decimal">
        <li>
          <b>Soru İşleme:</b> Kullanıcının sorduğu soruyu analiz edip, anahtar
          kelimeleri ve sorunun tipini belirler.
        </li>
        <li>
          <b>Bilgi Alma:</b> İlgili bilgileri bulmak için veritabanları veya
          dokümanlardan bilgi çeker.
        </li>
        <li>
          <b>Cevap Üretme:</b> Alınan bilgileri işleyerek doğru ve anlamlı bir
          cevap üretir.
        </li>
        <li>
          <b>Cevap Dönütü:</b> Üretilen cevabı kullanıcıya sunar.
        </li>
      </ol>

      <p className="mt-4">
        Soru Cevap Sistemlerini üç grupta değerlendirmek mümkündür:
      </p>
      <ol className="ml-4 list-decimal">
        <li>
          <b>Soru Türüne Göre Soru Cevaplama:</b> Genellikle, araştırmaları
          basitleştirmek amacıyla, sorular belirli bir metin içinden cevaplanır.
          Bu, insanların ömür boyu öğrendikleri bilgileri bilgisayarın insan
          gibi cevaplaması düşüncesinden daha gerçekçi bir yaklaşımdır.
          Günümüzdeki çalışmalar genellikle, doğal dilde yazılmış bir metin
          içerisinden sorulan soruların cevaplanmasını içerir. Bu türde iki ana
          kategori vardır: açık alan ve kapalı alan soruları. Açık alan soruları
          belirli bir konuya odaklanırken, kapalı alan soruları daha geniş bir
          bilgi gerektirir. Örneğin, &quot;Türkiye&apos;nin en çok kazanan
          oyuncusu kimdir?&quot; sorusu sinema veya spor gibi farklı alanlarda
          farklı cevaplar gerektirebilir.
        </li>
        <li>
          <b>Cevap Türüne Göre Soru Cevaplama:</b> Bazı soruların cevapları net
          ve kısadır. Örneğin, &quot;Türkiye Cumhuriyeti&apos;nin ilk
          Cumhurbaşkanı kimdir?&quot; sorusunun tek bir doğru cevabı vardır.
          Ancak, &quot;Türkiye Cumhuriyeti&apos;nin ilk Cumhurbaşkanı nasıl bir
          kişidir?&quot; gibi soruların cevapları kişiden kişiye değişkenlik
          gösterir. Bu nedenle, sorular belirli cevaplar ve belirsiz cevaplar
          olmak üzere iki gruba ayrılabilir.
        </li>
        <li>
          <b>Soru Cevaplama Yöntemlerine Göre:</b> Soru cevaplama teknikleri,
          kullanılan yöntemlere göre iki ana kategoride incelenebilir: sığ ve
          derin yöntemler. Sığ yöntemler, cümle içindeki basit yapıların analizi
          ve belirli kelimeler üzerinden anlam çıkarma gibi tekniklere dayanır.
          Derin yöntemler ise, kelimebilim, cümle dizilimi ve anlambilim gibi
          daha karmaşık dil bilgisi analizlerini, ayrıca anlam
          belirsizliklerini, ontoloji ve ilgi çözümlemelerini içerir.
        </li>
      </ol>

      <Link
        href="/sohbet"
        className="mt-8 flex w-fit items-center gap-4 rounded bg-[#04052e] px-4 py-2 text-white hover:opacity-75"
      >
        Deneyin <ArrowUpIcon className="size-4 rotate-45" />
      </Link>
    </div>
  );
};

export default Home;
