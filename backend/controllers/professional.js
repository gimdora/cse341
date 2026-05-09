// GET /professional
// 프론트엔드(script.js)가 요구하는 데이터 형식에 맞춰서 반환
const getData = (req, res) => {
  const myData = {
    professionalName: 'Dr. Sheldon Cooper',
    // 1x1 회색 placeholder PNG (본인 사진을 base64로 변환해서 교체하세요)
    // 변환 도구: https://elmah.io/tools/base64-image-encoder/
    base64Image:
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    nameLink: {
      firstName: 'Sheldon',
      url: 'https://en.wikipedia.org/wiki/Sheldon_Cooper'
    },
    primaryDescription:
      ', Ph.D., Sc.D., is a theoretical physicist at Caltech.',
    workDescription1:
      'Dr. Cooper has worked extensively in the field of string theory, ' +
      'focusing on the topological dynamics of branes in higher dimensional spaces. ' +
      'He has published numerous papers on quantum field theory.',
    workDescription2:
      'In addition to his theoretical work, Dr. Cooper enjoys collaborating ' +
      'with experimental physicists, although he occasionally finds their ' +
      'methodology less rigorous than his own.',
    linkTitleText: 'Where to find me online:',
    linkedInLink: {
      text: 'My LinkedIn page',
      link: 'https://www.linkedin.com/'
    },
    githubLink: {
      text: 'My Github page',
      link: 'https://github.com/'
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(myData);
};

module.exports = {
  getData
};
