const animation_speed = 450;

export const animateSearch = () => {
  anime({
    targets: "#left_fg",
    points: [
      {
        value: [
          "386.5 382 660.5 299.5 711 354 456 414 471.5 437 328 450.5 416 405.5 386.5 382",
          "393.5 381 668 299.5 707 356 458 414.5 462.5 439.5 325.5 451.5 414.5 406.5 393.5 381",
        ],
      },
      {
        value:
          "399.5 377.5 671.5 294.5 705.5 355 454.5 413.5 460.5 437 326.5 451.5 414 407 399.5 377.5",
      },
      {
        value:
          "386.5 382 660.5 299.5 711 354 456 414 471.5 437 328 450.5 416 405.5 386.5 382",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });

  anime({
    targets: "#left_bg",
    points: [
      {
        value: [
          "368 378.5 665.5 285 733.5 360.5 471.5 418 486.5 445 307 457.5 398 405.5 368 378.5",
          "381 376 676 283 729 368 472.5 414.5 475.5 445 308 458 398 405.5 381 376",
        ],
      },
      {
        value:
          "381.5 372 678.5 279.5 724.5 364.5 470 419.5 479 446 308.5 456.5 398 405.5 381.5 372",
      },
      {
        value:
          "368 378.5 665.5 285 733.5 360.5 471.5 418 486.5 445 307 457.5 398 405.5 368 378.5",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });

  anime({
    targets: "#right_bg",
    points: [
      {
        value: [
          "1404 411 1476.5 488.5 1270.5 567.5 1240.5 557 1404 411",
          "1430.5 379 1516 471 1275.5 561.5 1247 554 1430.5 379",
        ],
      },
      {
        value:
          "1430.5 379 1516 471 1275.5 561.5 1247 554 1430.5 379",
      },
      {
        value:
          "1404 411 1476.5 488.5 1270.5 567.5 1240.5 557 1404 411",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });
  anime({
    targets: "#right_fg",
    points: [
      {
        value: [
          "1404 424 1456.5 485 1269 561.5 1249 554 1404 424",
          "1430.5 392 1502 469 1276.5 555 1257.5 551.5 1430.5 392",
        ],
      },
      {
        value:
          "1430.5 392 1502 469 1276.5 555 1257.5 551.5 1430.5 392",
      },
      {
        value:
          "1404 424 1456.5 485 1269 561.5 1249 554 1404 424",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });

  //fg_bg
  anime({
    targets: "#bg",
    points: [
      {
        value: [
          "418 463 435.5 412.5 941 379 1398.5 354.5 1361.5 381 1396.5 628 501.5 554.5 476 584.5 396.5 524.5 375 544 278 448.5 358.5 472 373.5 437 418 463",
          "424.5 459 435.5 412.5 941 379 1394 356 1361.5 379.5 1396.5 629 501.5 554.5 472 580.5 402.5 525 381 544 279.5 450 361.5 468 375 436.5 424.5 459",
        ],
      },
      {
        value:
          "418 463 435.5 412.5 941 379 1398.5 354.5 1361.5 381 1396.5 628 501.5 554.5 476 584.5 396.5 524.5 375 544 278 448.5 358.5 472 373.5 437 418 463",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });
  anime({
    targets: "#bg_2",
    points: [
      {
        value: [
          "1347 366 1383 620.5 498 546.5 468.5 567 402.5 514 379.5 532.5 303.5 457.5 365.5 479.5 376 441 429 479.5 445 418.5 1347 366",
          "1347 367 1383.5 621.5 498 546.5 466 562.5 405 510 382 529 302.5 459.5 367 475.5 382 440 430 473.5 446.5 417 1347 367",
        ],
      },
      {
        value:
          "1347 366 1383 620.5 498 546.5 468.5 567 402.5 514 379.5 532.5 303.5 457.5 365.5 479.5 376 441 429 479.5 445 418.5 1347 366",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });
  anime({
    targets: "#fg",
    points: [
      {
        value: [
          "434.5 486.5 452.5 422 1334 377.5 1374 615 492.5 534.5 464.5 550 404.5 497 379.5 516.5 340.5 479.5 369 494 382.5 460.5 434.5 486.5",
          "435.5 483 453 422 1334.5 376 1374 616 493.5 534 467 545.5 406.5 492 382.5 512 340.5 479.5 372 489 386 461 435.5 483",
        ],
      },
      {
        value:
          "434.5 486.5 452.5 422 1334 377.5 1374 615 492.5 534.5 464.5 550 404.5 497 379.5 516.5 340.5 479.5 369 494 382.5 460.5 434.5 486.5",
      },
    ],
    easing: "easeOutQuad",
    duration: animation_speed,
    loop: true,
  });
};